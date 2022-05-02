
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
		extend: {
			colors: {
				light: '#F5F5F5',
				dark: '#14303D',
				bgImgColor: '#0064FF',
				newsTitleColor: '#BE0000',
				footerColor: '#00376A',
				primary: {
					100: '#8798f8',
	     		    200: '#6e83f7',
	     		    300: '#566ef5',
	     		    400: '#3e59f4',
	     		    500: '#2645f2',
	     		    600: '#0e30f1',  //primary color
	     		    700: '#0d2dd8',
	     		    800: '#0b26c1',
	     		    900: '#0a22a9',
				},
				secondary: {
					100: '#80dfff',
					200: '#66d9ff',
					300: '#4dd2ff',
					400: '#33ccff',
					500: '#01c1ff',
					600: '#1ac6ff', //secondary color
					700: '#00ace6',
					800: '#0099cc',
					900: '#0086b3',		 
				},
			},
		},
		container: {
			center: true,
			// padding: {
			// 	DEFAULT: '1rem',
			// 	md: '2rem',
			// 	lg: '4rem',
			// 	xl: '6rem',
			// 	'2xl': '8rem',
			// },
		},
		screens: {

			sm: '640px',
			// => @media (max-width: 640px) { ... }

			md: '768px',
			// => @media (max-width: 768px) { ... }

			lg: '1024px',
			// => @media (max-width: 1024px) { ... }

			xl: '1280px',
			// => @media (max-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (max-width: 1536px) { ... }
		},
	},

  plugins: [  ],
}
