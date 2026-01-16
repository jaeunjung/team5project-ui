import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'giwa-charcoal': '#2C2C2C',
                'hanji-white': '#F4F4F0',
                'wood-dark': '#4A3B32',
                'pine-green': '#4A5D23',
                'sunset-red': '#B94E48',
            },
            fontFamily: {
                serif: ['"Noto Serif KR"', 'serif'],
                sans: ['"Noto Sans KR"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
