/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				suisse: ["Suisse"],
				suisseBold: ["Suisse Bold"],
				suisseMedium: ["Suisse Medium"],
				karlotte: ["Karlotte"],
				karlotteItalic: ["Karlotte Italic"],
				meditate: ["Meditate"],
				bright: ["Brighta"],
				terminaBold: ["Termina Bold"],
				terminaDemi: ["Termina Demi"],
			},
			colors: {
				primary: {
					DEFAULT: "#1A0A02",
					light: "#FDF6E8",
					dark: "#212121",
				},
			},
			screens: {
				xs: "320px",
				xxs: "420px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				xxl: "1536px",
				xxxl: "1700px",
			},
		},
	},
	plugins: [],
};
