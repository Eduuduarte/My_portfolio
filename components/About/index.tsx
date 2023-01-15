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
                        Iniciei minha jornada na programação no ano de 2021. Desde do ínico, meu foco sempre foi entregar a melhor experiência para o cliente,
                        e, também estou sempre procurando aperfeiçoar minha habilidades e adiquirir novos conhecimentos, buscando atualizações sobre as stacks que trabalho. Em meus projetos, costumo 
                        utilizar conceitos de arquitetura limpa e de fácil manutenção, que garante para o cliente uma aplicação confiável.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;