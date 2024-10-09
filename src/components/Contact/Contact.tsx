import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

interface Data {
    name: string;
    email: string;
    telephone: string;
    opnion: string;
}

export function Contact(){
    const [wasSend, setWasSend] = useState(false)
    const handleForm = (data: Data) => {
        // console.log(data);
    
        if(data.name === '' || data.email === '' || data.telephone === '' || data.opnion === ''){
            return;
        };
        // Pegando as informações para colocar no templateEmail
        const templateParams = {
            name: data.name,
            email: data.email,
            telephone: data.telephone,
            message: data.opnion,
        };
    
        // Para enviar as informações do Form por Email
        emailjs.send("service_znurchl", "template_xifqdpl", templateParams, "eQp_3RbaJKsV8kOFU")
        .then((response) => {
            // backgroundForm.classList.toggle('formSend');
            console.log("Email Enviado", response.status, response.text);
            setWasSend(!wasSend)
            // return window.location.href = "/formulario-enviado";
        }, (err) => {
            console.log("Erro:", err);
        });
    }

    // Aqui criamos uma forma de useState com o react hook form
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm({
        // Para messages de erro
        defaultValues: {
            name: "",
            email: "",
            telephone: "",
            opnion: ""
        }
    });
    return(
        <section className="contact">
            <div className="contact_card">
                <div className="contact_card_title">
                    <h3>Entre em contato comigo!</h3>
                </div>
                {wasSend ? (
                        <div className="div_form_send">
                        <h3>Formulário Enviado ✅</h3>
                        <p>Assim que possível, entraremos em contato!!</p>
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit(handleForm)}>
                        <div className="formulary">
                            <div className="item_formulary">
                                <label htmlFor="username">Nome  <span>*</span></label>
                                <input type="text" className='input' id="username" placeholder="Digite o seu nome" autoComplete="on" 
                                {...register("name",
                                    // Para o Regex e definição de mensagem de erro 
                                    {required: 'Este campo é Obrigatório *',
                                    pattern: {
                                        value: /^[A-Za-zÀ-ÖØ-öø-ÿĀ-žÑñ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿĀ-žÑñ]+)*$/
    , 
                                        message: 'Apenas Letras são válidas!'} 
                                    })
                                }/>
                                {/* Aqui irá mostrar a mensagem de erro */}
                                <p className='aviso'>{errors.name?.message}</p>
                            </div>
                            <div className="item_formulary">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input type="email" className='input' id="email" placeholder="Digite o seu email" autoComplete="on" 
                                {...register("email", 
                                    {required: 'Este campo é Obrigatório *',
                                    pattern: {
                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 
                                        message: 'Apenas Emails válidos. Ex: your.Name@gmail.com!'} 
                                    })
                                }/>
                                <p className='aviso'>{errors.email?.message}</p>
                            </div>
                            <div className="item_formulary">
                                <label htmlFor="telephone">Telefone <span>*</span></label>
                                <input type="tel" className='input' id="telephone" placeholder="Digite o seu número 11 9xxxxxxxx" autoComplete="on" 
                                {...register("telephone", 
                                    {required: 'Este campo é Obrigatório *',
                                    pattern: {
                                        value: /^\d{2}\s?9?\d{8}$/, 
                                        message: 'Insira um número válido. Ex: 11970601261'}
                                    })
                                }/>
                                <p className='aviso'>{errors.telephone?.message}</p>
                            </div>
                            <div className="item_formulary">
                                <label htmlFor="opnion">O que gostaria de me dizer? <span>*</span></label>
                                <textarea 
                                    className='textarea' 
                                    id="opnion" 
                                    placeholder="Me conte sobre" 
                                    autoComplete="on" 
                                    {...register("opnion", {
                                        required: 'Este campo é Obrigatório *'
                                    })}
                                />
                                <p className='aviso'>{errors.opnion?.message}</p>
                            </div>
                        </div>
                        <div className="register">
                            <button id="btn-send" type="submit">Cadastrar</button>
                        </div>
                    </form>
                )}
            </div>
        </section>  
    );
}