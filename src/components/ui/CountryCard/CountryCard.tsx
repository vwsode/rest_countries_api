import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { useTheme } from '@/hooks';

import styles from './CountryCard.module.scss';

type Props = {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital?: string;
    link: string | number;
}

const CountryCard: FC<Props> = ({ link, flag, name, population, region, capital }) => {
    const { mode } = useTheme();

    return (
        <div className={`${styles['card']} ${styles[mode]}`}>
            <img className={styles['flag']} src={flag} alt={name} />
            <NavLink className={styles['overlay-link']} to={link.toString()} />
            <div className={styles['block']}>
                <h4 className={styles['title']}>{name}</h4>
                <div className={styles['infos']}>
                    <div className={styles['info']}>
                        <span className={styles['info-title']}>Population: </span>
                        <span className={styles['info-value']}>{population}</span>
                    </div>
                    <div className={styles['info']}>
                        <span className={styles['info-title']}>Region: </span>
                        <span className={styles['info-value']}>{region}</span>
                    </div>

                    <div className={styles['info']}>
                        <span className={styles['info-title']}>Capital: </span>
                        <span className={styles['info-value']}>{capital}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
