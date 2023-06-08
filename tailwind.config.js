/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{svelte,html,ts,js,css}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
