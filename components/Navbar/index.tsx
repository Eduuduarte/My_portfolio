import styles from './styles.module.css';
import {AiFillHome, AiOutlineIdcard, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {FaTools, FaPhoneSquareAlt} from 'react-icons/fa';
import {BsFileBarGraphFill} from 'react-icons/bs';

import { useState } from 'react';

const Navbar= () => {

    const [activiteNav, setActiveNav] = useState('#');

    return (
        <div className={styles.container}>
            <a href='#' onClick={() => setActiveNav('#')} className={activiteNav === '#' ? styles.active : ''}><AiFillHome className={styles.icon} /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activiteNav === '#about' ? styles.active : ''}><AiOutlineIdcard className={styles.icon}/></a>
            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activiteNav === '#skills' ? styles.active : ''}><FaTools className={styles.icon}/></a>
            <a href='#service' onClick={() => setActiveNav('#service')} className={activiteNav === '#service' ? styles.active : ''}><AiOutlineFundProjectionScreen className={styles.icon}/></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activiteNav === '#portfolio' ? styles.active : ''}><BsFileBarGraphFill className={styles.icon}/></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activiteNav === '#contact' ? styles.active : ''}><FaPhoneSquareAlt className={styles.icon}/></a>
        </div>
    )
}

export default Navbar;