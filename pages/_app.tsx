import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../common/store';
import ThemeProvider from '../common/hooks/useTheme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
