import styles from './styles.module.css';
import { RiProfileLine } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const About = () => {
    return (
        <div className={styles.container} id="about">
            <h4>Conheca mais</h4>
            <h1>Sobre mim</h1>

            <div className={styles.about}>
                <div className={styles.areaImg}>
                    <img src="/assets/avatar.svg" alt="avatar" className={styles.img} />
                </div>
                <div className={styles.areaCards}>
                    <div className={styles.cards}>
                        <article className={styles.card}>
                            <RiProfileLine className={styles.icon} />
                            <h4>Experiência</h4>
                            <small>+1 ano</small>
                        </article>
                        <article className={styles.card}>
                            <BsFillPeopleFill className={styles.icon} />
                            <h4>Clientes</h4>
                            <small>+10</small>
                        </article>
                        <article className={styles.card}>
                            <AiOutlineFundProjectionScreen className={styles.icon} />
                            <h4>Projetos</h4>
                            <small>+30</small>
                        </article>
                    </div>
                    <p className={styles.areaText}>
                        Iniciei minha jornada na programação a pouca mais de 1 ano. Desde o ínico, meu foco sempre foi entregar a melhor experiência para o cliente.
                        Tmabém estou sempre procurando aperfeiçoando minha habilidades e adiquirir novos conhecimentos, sempre buscando me manter atualizado sobre as tedências de mercados.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;