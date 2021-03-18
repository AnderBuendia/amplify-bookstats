import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

test("Check for Initial Started text", () => {
    render(<Home />);
    const homeText = screen.getByText("From Index", {
        exact: false,
    });
    expect(homeText).toBeInTheDocument();
});