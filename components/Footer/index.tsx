import Link from 'next/link';
import styles from './styles.module.css';
import {ImLinkedin} from 'react-icons/im';
import {AiOutlineGithub} from 'react-icons/ai';
import {SiInstagram} from 'react-icons/si';

const Footer = () => {
    return (
        <div id='footer' className={styles.container}>
            <div className={styles.titlesMenu}>
                <h3>Eduardo Duarte</h3>
                <ul className={styles.lista}>
                    <li><Link href={'#'}>Home</Link></li>
                    <li><Link href={'#about'}>Sobre</Link></li>
                    <li><Link href={'#skills'}>Habilidades</Link></li>
                    <li><Link href={'#service'}>Serviços</Link></li>
                    <li><Link href={'#portfolio'}>Projetos</Link></li>
                    <li><Link href={'#contact'}>Contato</Link></li>
                </ul>
            </div>
            <div className={styles.icons}>
                <a href={'https://www.linkedin.com/in/eduuduarte/'} target="_blank" rel="noreferrer"><ImLinkedin className={styles.icon} /></a>
                <a href={'https://github.com/Eduuduarte'} target="_blank" rel="noreferrer"><AiOutlineGithub className={styles.icon} /></a>
                <a href={'https://www.instagram.com/edu_uduarte/'} target="_blank" rel="noreferrer"><SiInstagram className={styles.icon} /></a>
            </div>
        </div>
    )
}

export default Footer;