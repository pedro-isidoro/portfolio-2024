import '@testing-library/jest-dom'
import { Header } from '@/components/Header/Header'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Header - Main Aside Content', async () => {
    it('should render the header Home Button', ()=>{
        render(<Header />)
        // console.log(screen.debug());
        expect(screen.getByText(/Home/i)).toBeInTheDocument()
    })
    it('should render the skills Skills Button', ()=>{
        render(<Header />)
        expect(screen.getByText(/Skills/i)).toBeInTheDocument()
    })
    it('should render the header Projects Button', ()=>{
        render(<Header />)
        expect(screen.getByText(/Projects/i)).toBeInTheDocument()
    })
    it('should render the header Faq Button', ()=>{
        render(<Header />)
        expect(screen.getByText(/Faq/i)).toBeInTheDocument()
    })
    it('should render the header Contact Button', ()=>{
        render(<Header />)
        expect(screen.getByText(/Contact/i)).toBeInTheDocument()
    })
})