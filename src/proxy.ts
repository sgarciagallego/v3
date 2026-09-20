import { withAuth } from 'next-auth/middleware';

const proxy = withAuth({
	secret: process.env.NEXTAUTH_SECRET,
});

export default proxy;

export const config = { matcher: ['/portfolio/:path*'] };
