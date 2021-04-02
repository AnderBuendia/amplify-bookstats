import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from 'pages/index';
import AuthContext from 'lib/context/auth/authContext';

describe('Initial tests', () => {
  test('Check Home', () => {
    render(
      <AuthContext.Provider
        value={{
          setUser: jest.fn(),
          setUiState: jest.fn(),
        }}
      >
        <Home />
      </AuthContext.Provider>
    );

    const indexHeading = screen.getByRole('heading', {
      name: /from index/i,
    });
    expect(indexHeading).toBeInTheDocument();
  });
});
