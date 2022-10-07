import styles from './styles.module.css';
import { BsGithub } from 'react-icons/bs';

const Portfolio = () => {
    return (
        <div className={styles.container} id="portfolio">
            <h4>Trabalhos recentes</h4>
            <h1>Portifólio</h1>
            <div className={styles.projects}>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img src='/assets/Dashboard.png' />
                    </div>
                    <div>
                        <h3>Dashboard</h3>
                        <div>
                            <a href=""><BsGithub className={styles.icon} /></a>
                            <a href="">Visitar</a>
                        </div>
                    </div>
                </article>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img src='/assets/Dashboard.png' />
                    </div>
                    <div>
                        <h3>Dashboard</h3>
                        <div>
                            <a href=""><BsGithub className={styles.icon} /></a>
                            <a href="">Visitar</a>
                        </div>
                    </div>
                </article>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img src='/assets/Dashboard.png'></img>
                        <a href="" className={styles.visite}>Visitar</a>
                    </div>
                    <div>
                        <h3>Dashboard</h3>
                        <div>
                            <a href=""><BsGithub className={styles.icon} /></a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Portfolio;