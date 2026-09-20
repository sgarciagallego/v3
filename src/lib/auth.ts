import { createHash, timingSafeEqual } from 'node:crypto';

import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const digest = (value: string) => createHash('sha256').update(value).digest();

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'password',
			credentials: {
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			async authorize(credentials, _request) {
				const expected = process.env.NEXTAUTH_PASSWORD;
				const supplied = credentials?.password;

				if (!expected || typeof supplied !== 'string' || !supplied) {
					return null;
				}

				return timingSafeEqual(digest(supplied), digest(expected))
					? { id: '0' }
					: null;
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
		error: '/login',
	},
};
