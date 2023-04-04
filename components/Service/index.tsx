import styles from './styles.module.css';
import {MdComputer} from 'react-icons/md';
import {BsPhone, BsCodeSquare} from 'react-icons/bs';
import {AiOutlineApi} from 'react-icons/ai';

const Service = () => {
    return (
        <div className={styles.container} id='service'>
            <h4>Quais são os</h4>
            <h1>Serviços</h1>
            <h4>que ofereço</h4>

            <div className={styles.area}>
                <article className={styles.service}>
                    <MdComputer className={styles.icon}/>
                    <div className={styles.serviceText}>
                        <h3>Desenvolvimento WEB</h3>
                        <p>Desenvolvo sistemas WEB responsivos, leadpages, dashboards, sistemas de loja virtual e delivery.</p>
                    </div>
                </article>
                <article className={styles.service}>
                    <BsPhone className={styles.icon}/>
                    <div className={styles.serviceText}>
                        <h3>Desenvolvimento Aplicativos</h3>
                        <p>Desenvolvo aplicativos mobile para Android e Iphone, que são atrativos, leves e robustos.</p>
                    </div>
                </article>
                <article className={styles.service}>
                    <AiOutlineApi className={styles.icon}/>
                    <div className={styles.serviceText}>
                        <h3>Criação de API</h3>
                        <p>Desenvolvo APIs com NodeJs para aplicações WEB e Mobile, utilizando banco de dados relacional e não relacional.</p>
                    </div>
                </article>
                <article className={styles.service}>
                    <BsCodeSquare className={styles.icon}/>
                    <div className={styles.serviceText}>
                        <h3>Outros</h3>
                        <p>Também faço freelancer para aplicações do Office365, e prototipagem de websites, aplicações mobiles no Figma e bot para Telegram.</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Service;
