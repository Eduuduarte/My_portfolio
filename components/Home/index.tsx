import Button from '../Button';
import styles from './styles.module.css';
import {ImLinkedin} from 'react-icons/im';
import {AiOutlineGithub, AiOutlineMinus} from 'react-icons/ai';
import {SiInstagram} from 'react-icons/si';

const Home = () => {
    return (
        <div className={styles.container}>
            <h4>Olá, eu sou</h4>
            <h1>Eduardo Duarte</h1>
            <h4>Desenvolvedor FullStack</h4>
            <div className={styles.button}>
                <Button
                    label="Currículo"
                    link='/assets/Curriculo.pdf'
                    download={true}
                    fill={true}
                />
                <Button
                    label="Contato"
                    link='#Contact'
                    download={false}
                    fill={false}
                />
            </div>

            <div className={styles.midiaSocials}>
                <a href='https://www.linkedin.com/in/eduuduarte/'><ImLinkedin className={styles.icon}/></a>
                <a href='https://www.linkedin.com/in/eduuduarte/'><AiOutlineGithub className={styles.icon}/></a>
                <a href='https://www.linkedin.com/in/eduuduarte/'><SiInstagram className={styles.icon}/></a>
            </div>

            <div className={styles.imgArea}>
                <img src="/assets/avatar.svg" alt="Avatar" className={styles.img} />
            </div>

            <div className={styles.scroll}>
                <a href=""><AiOutlineMinus />Scroll Down<AiOutlineMinus /></a>
            </div>


        </div>
    )
}

export default Home;