import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		container: {
			center: true,
			padding: '30px'
		  },
		  screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		  },
		fontFamily: {
			primary: "var(--font-spaceGrotesk)",
		  },
  		colors: {
  			background: '#F5F6F7',
  			foreground: '',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary:{
				DEFAULT: '#044B7F',
				foreground: '#3B4B59',
				white: '#FFFFFF',
				dark: "#010D17",
				light: "#529FC9"
			},
  			secondary:"#03528C",
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			
  		},
  		borderRadius: {
  			md: '16px',
  			sm: '12px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
