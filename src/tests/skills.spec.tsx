import '@testing-library/jest-dom'
import { Skills } from '@/components/Skills/Skills'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Skills - Main Skills Content', async () => {
    it('should render the title Text', ()=>{
        render(<Skills />)
        expect(screen.getByText(/My Skills/i)).toBeInTheDocument()
    })
    it('should render the subtitle Text', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Lista de tecnologias/i)).toBeInTheDocument()
    })
    it('should render the skill github card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Github/i)).toBeInTheDocument()
    })
    it('should render the skill HTML card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Html/i)).toBeInTheDocument()
    })
    it('should render the skill CSS card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Css/i)).toBeInTheDocument()
    })
    it('should render the skill JS card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Javascript/i)).toBeInTheDocument()
    })
    it('should render the skill React card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/React/i)).toBeInTheDocument()
    })
    it('should render the skill Styled card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Styled/i)).toBeInTheDocument()
    })
    it('should render the skill Router card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Router/i)).toBeInTheDocument()
    })
    it('should render the skill Hook card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Hook/i)).toBeInTheDocument()
    })
    it('should render the skill Tailwind card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Tailwind/i)).toBeInTheDocument()
    })
    it('should render the skill Redux card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Redux/i)).toBeInTheDocument()
    })
    it('should render the skill TS card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Typescript/i)).toBeInTheDocument()
    })
    it('should render the skill Sass card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Sass/i)).toBeInTheDocument()
    })
    it('should render the skill Vitest card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Vitest/i)).toBeInTheDocument()
    })
    it('should render the skill Testing card', ()=>{
        render(<Skills />)
        expect(screen.getByText(/Testing/i)).toBeInTheDocument()
    })
})