import React, { createContext, useContext, useEffect, useState } from 'react';

// 创建主题上下文
const ThemeContext = createContext();

// 自定义钩子，用于使用主题上下文
export const useTheme = () => useContext(ThemeContext);

// 主题提供者组件
export const ThemeProvider = ({ children }) => {
    // 使用 useState 钩子初始化主题
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    // 使用 useEffect 钩子监听主题变化
    useEffect(() => {
        document.body.setAttribute('data-theme', theme); // 修正了属性名
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 切换主题的函数
    const toggleTheme = () => {
       
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // 修正了 'light' 的引号
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
