import { FC, InputHTMLAttributes } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { useTheme } from '@/hooks';

import styles from './Search.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {}

const Search: FC<Props> = ({ className, ...props }) => {
    const { mode } = useTheme();

    return (
        <div className={`${styles['search']} ${styles[`${mode}`]} ${className}`}>
            <FaMagnifyingGlass className={styles['icon']} />
            <input className={styles['input']} {...props} />
        </div>
    );
};

export default Search;
