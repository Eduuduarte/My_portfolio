import Link from 'next/link';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titlesMenu}>
                <ul className={styles.lista}>
                    <li><Link href={'#'}>Home</Link></li>
                    <li><Link href={'#about'}>Sobre Mim</Link></li>
                    <li><Link href={'#skills'}>Habilidades</Link></li>
                    <li><Link href={'#service'}>Serviços</Link></li>
                    <li><Link href={'#portfolio'}>Projetos</Link></li>
                    <li><Link href={'#contact'}>Contato</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;