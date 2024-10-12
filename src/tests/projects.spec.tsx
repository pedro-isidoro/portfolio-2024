import '@testing-library/jest-dom'
import { Projects } from '@/components/Projects/Projects'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Projects - Main Projects Content', async () => {
    describe('Alt Text Images', () =>{
        it('should render the first project image card', ()=>{
            render(<Projects />)
            expect(screen.getByAltText(/Dev Burguer/i)).toBeInTheDocument()
        })
        it('should render the second project image card', ()=>{
            render(<Projects />)
            expect(screen.getByAltText(/Pokédex/i)).toBeInTheDocument()
        })
        it('should render the third project image card', ()=>{
            render(<Projects />)
            expect(screen.getByAltText(/My Best Photografies/i)).toBeInTheDocument()
        })
    })
    describe('Stack', () => {
        it('should render the first project stacks card', ()=>{
            render(<Projects />)
            expect(screen.getByText("HTML | JS | Tailwind | React")).toBeInTheDocument()
        })
        it('should render the second project stacks card', ()=>{
            render(<Projects />)
            expect(screen.getByText("HTML | JS | Tailwind | React | Redux | API")).toBeInTheDocument()
        })
        it('should render the third project stacks card', ()=>{
            render(<Projects />)
            expect(screen.getByText("HTML | TS | React | Tailwind | Vitest")).toBeInTheDocument()
        })
    })
    describe('Paragraph text', () => {
        it('should render the first project paragraph card', ()=>{
            render(<Projects />)
            expect(screen.getByText(/Uma Landing Page/i)).toBeInTheDocument()
        })
        it('should render the second project paragraph card', ()=>{
            render(<Projects />)
            expect(screen.getByText(/O objetivo desse/i)).toBeInTheDocument()
        })
        it('should render the third project paragraph card', ()=>{
            render(<Projects />)
            expect(screen.getByText(/Um projeto simples/i)).toBeInTheDocument()
        })
    })
    it('should render the link to the projects', ()=>{
        render(<Projects />)
        const links = screen.getAllByText(/Vercel Page/i)
        expect(links.length).toBe(3)
    })
})