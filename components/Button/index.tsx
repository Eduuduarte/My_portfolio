import styles from './styles.module.css';

type Props = {
    label: string;
    link: string;
    download: boolean;
    fill: boolean;
}

const Button = ({ label, link, download, fill}: Props) => {
    return (
        <div className={styles.container} style={{backgroundColor:`${fill ? "#001D3D" : "transparent"}`, borderColor:`${fill ? "transparent" : "#001D3D"}`}}>
            <a className={styles.link} href={link} download={download} >{label}</a>
        </div>
    )
}

export default Button;