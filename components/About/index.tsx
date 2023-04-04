import styles from './styles.module.css';
import Image from 'next/image';
import { RiProfileLine } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import Avatar from '../../public/assets/Avatar2.png';

const About = () => {
    return (
        <div className={styles.container} id="about">
            <h4>Conheca mais</h4>
            <h1>Sobre mim</h1>

            <div className={styles.about}>
                <Image src={Avatar} className={styles.img} alt="avatar"/>

                <div className={styles.areaCards}>
                    <div className={styles.cards}>
                        <article className={styles.card}>
                            <RiProfileLine className={styles.icon} />
                            <h4>Experiência</h4>
                            <small>+2 ano</small>
                        </article>
                        <article className={styles.card}>
                            <BsFillPeopleFill className={styles.icon} />
                            <h4>Clientes</h4>
                            <small>+5</small>
                        </article>
                        <article className={styles.card}>
                            <AiOutlineFundProjectionScreen className={styles.icon} />
                            <h4>Projetos</h4>
                            <small>+30</small>
                        </article>
                    </div>
                    <p className={styles.areaText}>
                    Sou um desenvolvedor apaixonado por tecnologia e comprometido com a entrega de soluções inovadoras. 
                    Sou um desenvolvedor com experiência em desenvolvimento de software e aplicativos, e estou sempre atualizado com as tendências do mercado.
                    Possuo habilidades tanto em back-end quanto em front-end. 
                    Tenho forte conhecimento em linguagens de programação como JavaScript, HTML, CSS, e Node.js, e experiência em bancos de dados relacionais e não-relacionais. Sou especialista em tecnologias web como React, Nextjs e Vue.js.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;