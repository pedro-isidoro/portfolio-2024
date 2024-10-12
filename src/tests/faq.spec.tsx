import '@testing-library/jest-dom'
import { Faq } from '@/components/Faq/Faq'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { userEvent } from '../../vitest-setup'

describe('Faq - Main Faq Content', async () => {
    it('should render the Title Text', ()=>{
        render(<Faq />)
        expect(screen.getByText(/FAQ/i)).toBeInTheDocument()
    })
    it('should render the first Faq Question Text', ()=>{
        render(<Faq />)
        expect(screen.getByText("Quem eu sou?")).toBeInTheDocument()
    })
    it('should render the second Faq Question Text', ()=>{
        render(<Faq />)
        expect(screen.getByText("Se eu Trabalho?")).toBeInTheDocument()
    })
    it('should render the third Faq Question Text', ()=>{
        render(<Faq />)
        expect(screen.getByText("Onde Estudo?")).toBeInTheDocument()
    })
    it('should render the fourth Faq Question Text', ()=>{
        render(<Faq />)
        expect(screen.getByText("Quais minhas Habilidades?")).toBeInTheDocument()
    })
    it('should render the fifth Faq Question Text', ()=>{
        render(<Faq />)
        expect(screen.getByText("Se tenho hobbies?")).toBeInTheDocument()
    })
    describe('OpenIcon', async()=>{
        it('should render the first Faq OpenIcon Text', ()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-1")
            expect(menuIcon).toBeInTheDocument()
        })
        it('should render the second Faq OpenIcon Text', ()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-2")
            expect(menuIcon).toBeInTheDocument()
        })
        it('should render the third Faq OpenIcon Text', ()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-3")
            expect(menuIcon).toBeInTheDocument()
        })
        it('should render the fourth Faq OpenIcon Text', ()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-4")
            expect(menuIcon).toBeInTheDocument()
        })
        it('should render the fifith Faq OpenIcon Text', ()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-5")
            expect(menuIcon).toBeInTheDocument()
        })
    })
    describe('CloseIcon', async()=>{
        it('should render the first Faq CloseIcon Text when button hited', async ()=>{
            render(<Faq />)
            // Clica no ícone de menu para abrir o menu
            const menuIcon = screen.getByTestId("menu-icon-1")
            await userEvent.click(menuIcon)
    
            // Verifica se a seção 'Sobre' está visível
            await waitFor(() => {
            const closeIcon = screen.getByTestId('close-icon-1')
            expect(closeIcon).toBeInTheDocument()
            })
        })
        it('should render the second Faq CloseIcon Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-2")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByTestId('close-icon-2')
            expect(closeIcon).toBeInTheDocument()
            })
        })
        it('should render the third Faq CloseIcon Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-3")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByTestId('close-icon-3')
            expect(closeIcon).toBeInTheDocument()
            })
        })
        it('should render the fourth Faq CloseIcon Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-4")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByTestId('close-icon-4')
            expect(closeIcon).toBeInTheDocument()
            })
        })
        it('should render the fifith Faq CloseIcon Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-5")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByTestId('close-icon-5')
            expect(closeIcon).toBeInTheDocument()
            })
        })
    })
    describe('answer', async()=>{
        it('should render the first Faq Answer Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-1")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByText(/Eu me chamo Pedro/i)
            expect(closeIcon).toBeInTheDocument()
            })
        })
        it('should render the second Faq Answer Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-2")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByText(/Infelizmente não/i)
            expect(closeIcon).toBeInTheDocument()
            })
        })
        it('should render the third Faq Answer Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-3")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByText(/Realizo minha faculdade/i)
            expect(closeIcon).toBeInTheDocument()
            })
        })
        it('should render the fourth Faq Answer Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-4")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByText(/Sou um jovem curioso/i)
            expect(closeIcon).toBeInTheDocument()
            })
        })
        it('should render the fifith Faq Answer Text when button hited', async()=>{
            render(<Faq />)
            const menuIcon = screen.getByTestId("menu-icon-5")
            await userEvent.click(menuIcon)
    
            await waitFor(() => {
            const closeIcon = screen.getByText(/Com toda a certeza/i)
            expect(closeIcon).toBeInTheDocument()
            })
        })
    })
})