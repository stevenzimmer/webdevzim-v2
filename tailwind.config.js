const colors = require("tailwindcss/colors");
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },

            colors: {
                // Remove the "gray" colors from the theme.
                gray: {},
                grey: {
                    ...colors["stone"],
                },
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
