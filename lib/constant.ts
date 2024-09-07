export const siteConfig = {
  url: process.env.NODE_ENV === 'production' 
    ? 'https://sergiogarciagallego.com' 
    : 'http://localhost:3000',
  title: 'Sergio Garcia Gallego',
  description: 'Find friendly developer tutorials, as well as personal and professional advice from an unconventional perspective.',
}

export const work = {
  currentRole: 'Web Developer',
  currentCompany: 'Major Digital',
  currentCompanyHref: 'https://majordigital.com',
}