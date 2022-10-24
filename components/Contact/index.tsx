import styles from './styles.module.css';
import React, { DetailedHTMLProps, HTMLAttributes, useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    const form = useRef<HTMLFormElement | string>(null);
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm('service_e7j0v66', 'template_ybngiqa', e.target, 'xNtDKsHpbLj7p0eqa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }


return (
    <div className={styles.container} id="contact">
        <h4>Vamos conversa?</h4>
        <h1>Contate-me</h1>

        <div className={styles.areaContact}>
            <div className={styles.areaOptions}>
                <article className={styles.option}>
                    <MdEmail className={styles.icon} />
                    <h4>E-mail</h4>
                    <h3>eduardoievolucao@gmail.com</h3>
                    <a href='mailto:eduardoievolucao@gmail.com'>Envie uma mensagem</a>
                </article>
                <article className={styles.option}>
                    <RiWhatsappFill className={styles.icon} />
                    <h4>WhatsApp</h4>
                    <h3>+5588998056422</h3>
                    <a href='https://wa.me/qr/KYYMGTLFCCBOE1'>Envie uma mensagem</a>
                </article>
                <article className={styles.option}>
                    <AiFillLinkedin className={styles.icon} />
                    <h4>Linkedin</h4>
                    <h3>Eduardo Duarte</h3>
                    <a href='https://www.linkedin.com/in/eduuduarte/'>Envie uma mensagem</a>
                </article>
            </div>
            <form action='submit' onSubmit={sendEmail}>
                <input type="name" name='name' placeholder='Seu Nome' />
                <input type="email" name='email' placeholder='Seu E-mail' />
                <input type="name" name='subject' placeholder='Assunto' />
                <textarea name="message" id="" rows={10}></textarea>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    </div>
)
}

export default Contact;