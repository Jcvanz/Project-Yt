import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './GlobalStyles';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme';
import { AppProvider } from './contexts/OpenMenu';
import { CategoryProvider } from './contexts/SearchCategories';
import { SearchProvider } from './contexts/SearchContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppProvider>
        <CategoryProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </CategoryProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);