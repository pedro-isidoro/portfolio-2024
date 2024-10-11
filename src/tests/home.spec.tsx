import '@testing-library/jest-dom'
import { Home } from '@/components/Home/Home'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Home - Main home Content', async () => {
    it('should render the alt image Text', ()=>{
        render(<Home />)
        expect(screen.getByAltText(/Profile image mine/i)).toBeInTheDocument()
    })
    it('should render the title Text', ()=>{
        render(<Home />)
        expect(screen.getByText(/Olá Pessoal/i)).toBeInTheDocument()
    })
    it('should render the paragraph Text', ()=>{
        render(<Home />)
        expect(screen.getByText(/Um estudante de TI/i)).toBeInTheDocument()
    })
    it('should render the button Text', ()=>{
        render(<Home />)
        expect(screen.getByText(/Contate-me/i)).toBeInTheDocument()
    })
})