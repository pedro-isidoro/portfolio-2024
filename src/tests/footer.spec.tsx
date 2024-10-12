import '@testing-library/jest-dom'
import { Footer } from '@/components/Footer/Footer'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Footer - Main Footer Content', async () => {
    it('should render the Instagram Icon Link', ()=>{
        render(<Footer />)
        expect(screen.getByTestId('instagram')).toBeInTheDocument()
    })
    it('should render the LinkedIn Icon Link', ()=>{
        render(<Footer />)
        expect(screen.getByTestId('linkedin')).toBeInTheDocument()
    })
    it('should render the GitHub Icon Link', ()=>{
        render(<Footer />)
        expect(screen.getByTestId('github')).toBeInTheDocument()
    })
    it('should render the ArrowUp Icon Link', ()=>{
        render(<Footer />)
        expect(screen.getByTestId('arrowUp')).toBeInTheDocument()
    })
})