import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				ume: {
					// Using your exact provided palette
					'floral-white': '#f9f5ee',
					'floral-white-100': '#483719',
					'floral-white-200': '#8f6d32',
					'floral-white-300': '#c69f5d',
					'floral-white-400': '#dfcaa4',
					'floral-white-500': '#f9f5ee',
					'floral-white-600': '#faf6f0',
					'floral-white-700': '#fbf8f4',
					'floral-white-800': '#fcfbf7',
					'floral-white-900': '#fefdfb',
					
					'periwinkle': '#c2c2f0',
					'periwinkle-100': '#111146',
					'periwinkle-200': '#22228c',
					'periwinkle-300': '#3636ce',
					'periwinkle-400': '#7c7cdf',
					'periwinkle-500': '#c2c2f0',
					'periwinkle-600': '#cecef3',
					'periwinkle-700': '#dadaf6',
					'periwinkle-800': '#e6e6f9',
					'periwinkle-900': '#f3f3fc',
					
					'dogwood-rose': '#d90466',
					'dogwood-rose-100': '#2b0115',
					'dogwood-rose-200': '#560229',
					'dogwood-rose-300': '#81033e',
					'dogwood-rose-400': '#ac0452',
					'dogwood-rose-500': '#d90466',
					'dogwood-rose-600': '#fa1b83',
					'dogwood-rose-700': '#fc54a2',
					'dogwood-rose-800': '#fd8dc1',
					'dogwood-rose-900': '#fec6e0',
					
					'mikado-yellow': '#ffc300',
					'mikado-yellow-100': '#332700',
					'mikado-yellow-200': '#664e00',
					'mikado-yellow-300': '#997500',
					'mikado-yellow-400': '#cc9c00',
					'mikado-yellow-500': '#ffc300',
					'mikado-yellow-600': '#ffcf33',
					'mikado-yellow-700': '#ffdb66',
					'mikado-yellow-800': '#ffe799',
					'mikado-yellow-900': '#fff3cc',
					
					'penn-blue': '#0f1d63',
					'penn-blue-100': '#030614',
					'penn-blue-200': '#060b27',
					'penn-blue-300': '#09113b',
					'penn-blue-400': '#0c174e',
					'penn-blue-500': '#0f1d63',
					'penn-blue-600': '#1931a7',
					'penn-blue-700': '#2f4de0',
					'penn-blue-800': '#7588ea',
					'penn-blue-900': '#bac4f5',
					
					// Adding new energetic and deep blue colors
					'deep-blue': '#171751',
					'deep-blue-100': '#03030f',
					'deep-blue-200': '#06061d',
					'deep-blue-300': '#09092c',
					'deep-blue-400': '#0c0c3a',
					'deep-blue-500': '#171751',
					'deep-blue-600': '#232371',
					'deep-blue-700': '#3535aa',
					'deep-blue-800': '#6a6ad1',
					'deep-blue-900': '#b4b4e8',
					
					'ocean-blue': '#0EA5E9',
					'ocean-blue-100': '#032030',
					'ocean-blue-200': '#054060',
					'ocean-blue-300': '#086090',
					'ocean-blue-400': '#0a80c0',
					'ocean-blue-500': '#0EA5E9',
					'ocean-blue-600': '#39b6ed',
					'ocean-blue-700': '#64c7f1',
					'ocean-blue-800': '#8fd7f5',
					'ocean-blue-900': '#c7ebfa',
					
					'energetic-orange': '#F97316',
					'energetic-orange-100': '#331705',
					'energetic-orange-200': '#662e0a',
					'energetic-orange-300': '#99450f',
					'energetic-orange-400': '#cc5c14',
					'energetic-orange-500': '#F97316',
					'energetic-orange-600': '#fa8e44',
					'energetic-orange-700': '#fbaa72',
					'energetic-orange-800': '#fdc59f',
					'energetic-orange-900': '#fee2cf',
					
					// Map legacy colors to new palette for backward compatibility
					'purple': '#c2c2f0',  // periwinkle
					'pink': '#d90466',    // dogwood-rose
					'yellow': '#ffc300',  // mikado-yellow
					'light': '#f9f5ee',   // floral-white
					'dark': '#171751',    // deep-blue - updated to the new deep blue
					
					// Additional SCSS colors from the second palette
					'isabelline': '#faf6f3',
					'lavender-web': '#dfdff6',
					'sunglow': '#ffcf31',
					'mexican-pink': '#e51077',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-delayed': {
					'0%, 50%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-light': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'scale': {
					'0%': {
						transform: 'scale(0.95)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-delayed': 'fade-in-delayed 1s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-light': 'pulse-light 4s ease-in-out infinite',
				'scale': 'scale 0.3s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
