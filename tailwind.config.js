/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{html,js,css}"
	],
	theme: {
		container: {
			center: true,
			// padding: '1rem',
		},
		fontFamily: {
			'mango': ['Black-Mango', 'serif'],
			'kodchasan': ['Kodchasan', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				'hero': "url('/media/jpg/hero-bg.jpg')",
				'classes': "url('/media/jpg/classes-bg.jpg')",
			},
			colors: {
				'white': '#FFFFFB',
				'beige': '#EDE8E6',
				'gray-dark': '#1a1919',
				'brown': '#695650'
			},
		},
	},
	plugins: [],
}

