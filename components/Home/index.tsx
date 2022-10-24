import Button from '../Button';
import styles from './styles.module.css';
import Image from 'next/image';
import Avatar from '../../public/assets/Avatar1.png';
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
                    link='#contact'
                    download={false}
                    fill={false}
                />
            </div>

            <div className={styles.midiaSocials}>
                <a href={'https://www.linkedin.com/in/eduuduarte/'} target="_blank"><ImLinkedin className={styles.icon}/></a>
                <a href={'https://github.com/Eduuduarte'} target="_blank"><AiOutlineGithub className={styles.icon}/></a>
                <a href={'https://www.instagram.com/edu_uduarte/'} target="_blank"><SiInstagram className={styles.icon}/></a>
            </div>

            <div className={styles.imgArea}>
                <Image src={Avatar} className={styles.img} width={300} height={150}/>
            </div>
            <div className={styles.midiaMobile}>
                <a href={'https://www.linkedin.com/in/eduuduarte/'} target="_blank"><ImLinkedin className={styles.icon}/></a>
                <a href={'https://github.com/Eduuduarte'} target="_blank"><AiOutlineGithub className={styles.icon}/></a>
                <a href={'https://www.instagram.com/edu_uduarte/'} target="_blank"><SiInstagram className={styles.icon}/></a>
            </div>

            <div className={styles.scroll}>
                <a href={'#footer'}><AiOutlineMinus />Scroll Down<AiOutlineMinus /></a>
            </div>


        </div>
    )
}

export default Home;