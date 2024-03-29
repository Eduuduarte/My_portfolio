import styles from './styles.module.css';
import { BsGithub } from 'react-icons/bs';
import Loading from '../Loading';
import Transparent from '../Transparent';

const Portfolio = () => {
    return (
        <div className={styles.container} id="portfolio">
            <h4>Trabalhos recentes</h4>
            <h1>Portifólio</h1>
            <div className={styles.projects}>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img className={styles.projectImg} src='/assets/Dashboard.png'></img>
                    </div>
                    <div className={styles.projectOver}>
                        <h3>Dashboard - Orçamento</h3>
                        <div className={styles.areaSub}>
                            <a href="https://github.com/Eduuduarte/Dashboard-ReactJs" className={styles.linkIcon} target="_blank" rel="noreferrer"><BsGithub className={styles.icon} /></a>
                            <a href="https://dashboard-shopperun.netlify.app" className={styles.visite} target="_blank" rel="noreferrer">Visitar</a>
                        </div>
                    </div>
                </article>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img className={styles.projectImg} src='/assets/Gooday.png'></img>
                    </div>
                    <div className={styles.projectOver}>
                        <h3>Design UI</h3>
                        <div className={styles.areaSub}>
                            <a href="https://www.figma.com/file/tBteqfdtFnud6GqVjXTabP/Gooday---Projeto?node-id=4%3A34&t=MEci5MHDmDSl9gxD-1" className={styles.visite} target="_blank" rel="noreferrer">Visitar</a>
                        </div>
                    </div>
                </article>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img className={styles.projectImg} src='/assets/SiteMusic.png'></img>
                    </div>
                    <div className={styles.projectOver}>
                        <h3>Streaming de música</h3>
                        <div className={styles.areaSub}>
                            <a href="https://github.com/Eduuduarte/Lyrics_React" className={styles.linkIcon} target="_blank" rel="noreferrer"><BsGithub className={styles.icon} /></a>
                            <a href="https://ed-lyrics-app.netlify.app" className={styles.visite} target="_blank" rel="noreferrer">Visitar</a>
                        </div>
                    </div>
                </article>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img className={styles.projectImg} src='/assets/projetoLoja.png'></img>
                    </div>
                    <div className={styles.projectOver}>
                        <h3>EToolShop - Design UI</h3>
                        <div className={styles.areaSub}>
                            <a href="https://www.figma.com/file/VajU3bz2xDUP940bNM5XGK/Untitled?node-id=0%3A1&t=bcjRDXQcSG9B5cDq-1" className={styles.visite} target="_blank" rel="noreferrer">Visitar</a>
                        </div>
                    </div>
                </article>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img className={styles.projectImg} src='/assets/Meunumerodasorte.png'></img>
                    </div>
                    <div className={styles.projectOver}>
                        <h3>Meu Número da Sorte</h3>
                        <div className={styles.areaSub}>
                            <a href="https://github.com/Eduuduarte/meunumerodasorte" className={styles.linkIcon} target="_blank" rel="noreferrer"><BsGithub className={styles.icon} /></a>
                            <a href="https://meunumerodasorte.netlify.app/" className={styles.visite} target="_blank" rel="noreferrer">Visitar</a>
                        </div>
                    </div>
                </article>
                <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <img className={styles.projectImg} src='/assets/Barbearia.png'></img>
                    </div>
                    <div className={styles.projectOver}>
                        <h3>Barbearia Urbana</h3>
                        <div className={styles.areaSub}>
                            <a href="https://www.figma.com/file/5h7smMaHUv8rR5N96AAiK5/Barbearia-Urbana?node-id=0%3A1&t=b5Q4FHu501mhYDt5-1" className={styles.visite} target="_blank" rel="noreferrer">Visitar</a>
                        </div>
                    </div>
                </article>
                {/* <article className={styles.project}>
                    <div className={styles.areaImg}>
                        <Loading />
                    </div>
                    <div className={styles.projectOver}>
                        <Transparent />
                    </div>
                </article> */}
            </div>
        </div>
    )
}

export default Portfolio;