import '@testing-library/jest-dom'
import { Contact } from '@/components/Contact/Contact'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { userEvent } from '../../vitest-setup'

describe('Contact - Main Formulary Content', async () => {
    it('should render the Ttle Text', ()=>{
        render(<Contact />)
        expect(screen.getByText(/Entre em contato comigo!/i)).toBeInTheDocument()
    })
    describe('Titles', () => {
        it('should render the first Input Title', ()=>{
            render(<Contact />)
            expect(screen.getByText(/Nome/i)).toBeInTheDocument()
        })
        it('should render the second Input Title', ()=>{
            render(<Contact />)
            expect(screen.getByText(/Email/i)).toBeInTheDocument()
        })
        it('should render the third Input Title', ()=>{
            render(<Contact />)
            expect(screen.getByText(/Telefone/i)).toBeInTheDocument()
        })
        it('should render the textarea Title', ()=>{
            render(<Contact />)
            expect(screen.getByText(/O que gostaria de me dizer/i)).toBeInTheDocument()
        })
    })
    describe('Placeholders', () => {
        it('should render the first Placeholder Text', ()=>{
            render(<Contact />)
            expect(screen.getByPlaceholderText('Digite o seu nome')).toBeInTheDocument()
        })
        it('should render the second Placeholder Text', ()=>{
            render(<Contact />)
            expect(screen.getByPlaceholderText('Digite o seu email')).toBeInTheDocument()
        })
        it('should render the third Placeholder Text', ()=>{
            render(<Contact />)
            expect(screen.getByPlaceholderText('Digite o seu número 11 9xxxxxxxx')).toBeInTheDocument()
        })
        it('should render the Placeholder Text ', ()=>{
            render(<Contact />)
            expect(screen.getByPlaceholderText('Me conte sobre')).toBeInTheDocument()
        })
    })
    it('should render the form button', ()=>{
        render(<Contact />)
        expect(screen.getByText('Cadastrar')).toBeInTheDocument()
    })
    describe('Should error e success messages', () => {
        it('should display error when fields are empty', async ()=>{
            render(<Contact />)
            const submitButton = screen.getByText('Cadastrar');
            await userEvent.click(submitButton)
    
            await waitFor(() => {
                const errorMessage = screen.getAllByText(/Este campo é Obrigatório/i);
                expect(errorMessage.length).toBe(4);
            })
        })
        it('should submit the form when name field are invalid', async () => {
            render(<Contact />);
            
            // Simulando o preenchimento dos campos
            await userEvent.type(screen.getByPlaceholderText('Digite o seu nome'), 'Pedro 12');
            
            // Clicar no botão de enviar
            const submitButton = screen.getByText('Cadastrar');
            await userEvent.click(submitButton);
            
            // Espera pela mensagem de sucesso
            await waitFor(() => {
                const errorMessage = screen.getByText(/apenas letras/i);
                expect(errorMessage).toBeInTheDocument();
            });
        });
        it('should submit the form when telefone field are invalid', async () => {
            render(<Contact />);
            
            
            await userEvent.type(screen.getByPlaceholderText('Digite o seu número 11 9xxxxxxxx'), '119g');
            
            // Clicar no botão de enviar
            const submitButton = screen.getByText('Cadastrar');
            await userEvent.click(submitButton);
            
            // Espera pela mensagem de sucesso
            await waitFor(() => {
                const errorMessage = screen.getByText(/Insira um número/i);
                expect(errorMessage).toBeInTheDocument();
            });
        });
    })
})