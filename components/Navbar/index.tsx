import styles from './styles.module.css';
import {AiFillHome, AiOutlineIdcard, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {FaTools, FaPhoneSquareAlt} from 'react-icons/fa';
import {BsFileBarGraphFill} from 'react-icons/bs';

const Navbar= () => {
    return (
        <div className={styles.container}>
            <a><AiFillHome className={styles.icon} /></a>
            <a><AiOutlineIdcard className={styles.icon}/></a>
            <a><FaTools className={styles.icon}/></a>
            <a><AiOutlineFundProjectionScreen className={styles.icon}/></a>
            <a><BsFileBarGraphFill className={styles.icon}/></a>
            <a><FaPhoneSquareAlt className={styles.icon}/></a>
        </div>
    )
}

export default Navbar;