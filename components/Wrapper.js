import { useState, useEffect } from "react";
import Header from "./Header";

export default function Wrapper({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const isThemeDark = () =>
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        setDarkTheme(isThemeDark());
    }, []);
    return (
        <div className={darkTheme ? "dark" : ""}>
            <div className="dark:bg-black dark:text-white h-screen transition-all">
                <div className="container">
                    <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}
