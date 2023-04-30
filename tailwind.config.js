/** @type {import('tailwindcss').Config} */ module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary-black': '#1A232E',
                'secondary-white': '#c7c7c7',
                'blue': '#3c31dd',
                'red': '#dd3f31',
            },
        },
    },
    plugins: [],
}
