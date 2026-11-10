export const siteConfig = {
	url:
		process.env.NODE_ENV === 'production'
			? 'https://novicist.com'
			: 'http://localhost:3000',
	title: 'Sergio Garcia Gallego',
	description:
		'Find friendly developer tutorials, as well as personal and professional advice from an unconventional perspective.',
};

export const work = {
	currentRole: 'Web Developer',
	currentCompany: 'Major Digital',
	currentCompanyHref: 'https://majordigital.com',
	currentCompanyImage: 'major.svg',
	currentTech: [
		{
			name: 'React',
			href: 'https://react.dev',
			image: 'react.svg',
		},
		{
			name: 'Jamstack',
			href: 'https://jamstack.org',
			image: 'jamstack.svg',
		},
	],
};
