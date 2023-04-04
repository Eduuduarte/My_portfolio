import styles from './styles.module.css';
import { useEffect, useState } from 'react';

import { AiFillHome, AiOutlineIdcard, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaTools, FaPhoneSquareAlt } from 'react-icons/fa';
import { BsFileBarGraphFill } from 'react-icons/bs';

const NAV_ITEMS = [
    { id: '', icon: AiFillHome },
    { id: 'about', icon: AiOutlineIdcard },
    { id: 'portfolio', icon: BsFileBarGraphFill },
    { id: 'skills', icon: FaTools },
    { id: 'service', icon: AiOutlineFundProjectionScreen },
    { id: 'contact', icon: FaPhoneSquareAlt },
];

const Navbar = () => {

    const [activiteNav, setActiveNav] = useState('#');
    const [scrollPosition, setScrollPosition] = useState(0);
    const [screenLarge, setScreenLarge] = useState(0);
    const [sizeScreen, setSizeScreen] = useState('')


    const handleTakeScreen = () => {
        const large = window.innerWidth;
        setScreenLarge(large)
    }


    useEffect(() => {
        window.addEventListener('load', handleTakeScreen);
        return () => window.removeEventListener('load', handleTakeScreen);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleTakeScreen);
        return () => window.removeEventListener('resize', handleTakeScreen);
    }, []);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log(scrollPosition)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        if (screenLarge > 1000) {
            setSizeScreen('Large')
        } else if (screenLarge > 414) {
            setSizeScreen('Medium')
        } else {
            setSizeScreen('Small')
        }
        console.log(sizeScreen)

        if (
            scrollPosition > 654 && scrollPosition < 1839 && sizeScreen === 'Small' ||
            scrollPosition > 521 && scrollPosition < 1539 && sizeScreen === 'Medium' ||
            scrollPosition > 666 && scrollPosition < 1441 && sizeScreen === 'Large'
        ) {
            setActiveNav('#about')
        } else if (
            scrollPosition > 1839 && scrollPosition < 4293 && sizeScreen === 'Small' ||
            scrollPosition > 1539 && scrollPosition < 4304 && sizeScreen === 'Medium' ||
            scrollPosition > 1441 && scrollPosition < 2541 && sizeScreen === 'Large'
        ) {
            setActiveNav('#portfolio')
        } else if (
            scrollPosition > 4293 && scrollPosition < 4795 && sizeScreen === 'Small' ||
            scrollPosition > 4304 && scrollPosition < 4951 && sizeScreen === 'Medium' ||
            scrollPosition > 2541 && scrollPosition < 3262 && sizeScreen === 'Large'
        ) {
            setActiveNav('#skills')
        } else if (
            scrollPosition > 3219 && scrollPosition < 5674 && sizeScreen === 'Small' ||
            scrollPosition > 4951 && scrollPosition < 5815 && sizeScreen === 'Medium' ||
            scrollPosition > 3262 && scrollPosition < 3983 && sizeScreen === 'Large'
        ) {
            setActiveNav('#service')
        } else if (
            scrollPosition > 3983
        ) {
            setActiveNav('#contact')
        } else if (scrollPosition < 521) {
            setActiveNav('#')
        }

    }, [scrollPosition, screenLarge])

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position)
    }

    return (
        <div className={styles.container}>
            {NAV_ITEMS.map(({ id, icon: Icon }) => (
                <a
                    href={`#${id}`}
                    className={activiteNav === `#${id}` ? styles.active : ''}
                    key={id}
                >
                    <Icon className={styles.icon} />
                </a>
            ))}
        </div>
    )
}

export default Navbar;