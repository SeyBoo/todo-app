import React, {
	createContext,
	useContext,
	PropsWithChildren,
	useState,
	useEffect,
} from 'react';

type themes = 'light' | 'dark';

type ThemeActions = {
	useTheme: () => themes;
	changeTheme: () => void;
};

const ThemeContext = createContext({} as ThemeActions);

const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<themes>('light');

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
			setTheme('dark');
		}
	}, []);

	const changeTheme = () => {
		if (theme === 'light') {
			document.documentElement.classList.add('dark');
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			setTheme('light');
		}
	};

	return (
		<ThemeContext.Provider value={{ changeTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useChangeTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('ChangeTheme must be placed within a ThemeProvider');
	}

	return context.changeTheme;
};

const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be placed within a ThemeProvider');
	}

	return context.theme;
};

export { useTheme, useChangeTheme };
export default ThemeProvider;
