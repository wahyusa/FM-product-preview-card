/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-dark-cyan': 'hsl(158, 36%, 37%)',
				'brand-darker-cyan': 'hsl(156, 42%, 18%)',
				'brand-cream': 'hsl(30, 38%, 92%)',
				'brand-very-dark-blue': 'hsl(212, 21%, 14%)',
				'brand-dark-grayish-blue': 'hsl(228, 12%, 48%)',
				'brand-white': 'hsl(0, 0%, 100%)'
			},
			fontFamily: {
				fraunces: ['Fraunces', 'serif'],
				montserrat: ['Montserrat', 'sans-serif']
			}
		},
		plugins: []
	}
};
