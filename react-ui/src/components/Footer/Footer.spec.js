import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Memory from 'multer/storage/memory';

describe("testing footer component", () => {
    it("Renders all the footer links", () => {
        render(
            <MemoryRouter>
                <Footer></Footer>
            </MemoryRouter>
        )
        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeDefined()
    })
})