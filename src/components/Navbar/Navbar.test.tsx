import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('Navbar', () => {
    test('renders navbar container with correct id', () => {
        render(<Navbar />)
        const navbarContainer = screen.getByTestId('navbar')
        expect(navbarContainer).toBeInTheDocument()
    })

    test('renders navbar title', () => {
        render(<Navbar />)
        const navbarTitle = screen.getByText('PLANNER')
        expect(navbarTitle).toBeInTheDocument()
    })
})