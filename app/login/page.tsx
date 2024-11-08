import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Well well well. It looks like you’ve bumped into a protected page. Enter the password or else...',
  alternates: {
    canonical: `${siteConfig.url}/login`,
  },
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();

  if (session) {
    redirect('/');
  }

  const csrfTokenCookie = `${
    process.env.NODE_ENV == 'production' ? '__Host-' : ''
  }next-auth.csrf-token`;
  const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split('|')[0];

  return (
    <main>
      <form
        method="POST"
        action="/api/auth/callback/credentials"
        id="height-fill"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label htmlFor="password">
          <h1 aria-label="Log in">🔐</h1>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
        />
        <button type="submit">Log in</button>
      </form>
    </main>
  );
}
