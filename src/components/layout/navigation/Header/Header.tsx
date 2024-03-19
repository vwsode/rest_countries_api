import { FaMoon } from 'react-icons/fa6';
import { FaSun } from 'react-icons/fa6';

import { Container } from '@components/ui';

import { ROUTES } from '@config/router.config.tsx';
import { useTheme } from '@/hooks';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const { mode, setTheme } = useTheme();

    const themeHandler = () => {
        setTheme(mode == 'dark' ? 'light' : 'dark');
    };

    return (
        <header className={`${styles['header']} ${styles[mode]}`}>
            <Container>
                <div className={styles['wrapper']}>
                    <h4 className={styles['title']}>
                        <NavLink to={ROUTES.MAIN}>Where in the world?</NavLink>
                    </h4>

                    <button className={styles['theme-toggle']}
                            onClick={themeHandler}
                    >
                        {mode == 'dark' ? <FaMoon /> : <FaSun />}
                        <span>{mode == 'dark' ? 'Dark' : 'Light'} Mode</span>
                    </button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
