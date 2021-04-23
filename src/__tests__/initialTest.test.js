import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from 'pages/index';
import AppContext from 'lib/context/app/appContext';

describe('Initial tests', () => {
  test('Check Home', () => {
    render(
      <AppContext.Provider
        value={{
          setUser: jest.fn(),
          setUiState: jest.fn(),
        }}
      >
        <Home />
      </AppContext.Provider>
    );

    const indexHeading = screen.getByRole('heading', {
      name: /from index/i,
    });
    expect(indexHeading).toBeInTheDocument();
  });
});
