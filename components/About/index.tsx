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
                            <h4>Experiências</h4>
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
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;