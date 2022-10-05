import styles from './styles.module.css';
import { BsBookmarkCheckFill } from 'react-icons/bs';

const Skills = () => {
    return (
        <div className={styles.container} id="skills">
            <h4>Quais são minhas</h4>
            <h2>Skills</h2>
            <div className={styles.areaSkill}>
                <div className={styles.area}>
                    <h3>Frontend</h3>
                    <div className={styles.content}>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>HTML</h3>
                                <small>Avançado</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>CSS</h3>
                                <small>Intermediário</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>Javascript</h3>
                                <small>Avançado</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>ReactJs</h3>
                                <small>Avançado</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>NextJs</h3>
                                <small>Intermediário</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>Bootstrap</h3>
                                <small>Intermediário</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>Tailwindcss</h3>
                                <small>Intermediário</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className={styles.area}>
                    <h3>Backend</h3>
                    <div className={styles.content}>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>NodeJs</h3>
                                <small>Avançado</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>MySQL</h3>
                                <small>Intermediário</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>MongoDB</h3>
                                <small>Avançado</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>PostgreSQL</h3>
                                <small>Avançado</small>
                            </div>
                        </article>
                        <article className={styles.skills}>
                            <BsBookmarkCheckFill className={styles.icon} />
                            <div>
                                <h3>Firebase</h3>
                                <small>Intermediário</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;