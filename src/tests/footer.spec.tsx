import '@testing-library/jest-dom'
import { Footer } from '@/components/Footer/Footer'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Header - Main Aside Content', async () => {
    it('should render the Instagram Icon Link', ()=>{
        render(<Footer />)
        expect(screen.getAllByTestId('instagram')).toBeInTheDocument()
    })
    it('should render the LinkedIn Icon Link', ()=>{
        render(<Footer />)
        expect(screen.getAllByTestId('linkedin')).toBeInTheDocument()
    })
    it('should render the GitHub Icon Link', ()=>{
        render(<Footer />)
        expect(screen.getAllByTestId('github')).toBeInTheDocument()
    })
})