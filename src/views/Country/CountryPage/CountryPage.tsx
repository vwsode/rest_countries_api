import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

import { Button, Container } from '@components/ui';

import { useCountry, useTheme } from '@/hooks';

import styles from './CountryPage.module.scss';

const CountryPage: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { mode } = useTheme();
    const { country, getCountry } = useCountry();

    useEffect(() => {
        if (id)
            getCountry(id);
    }, []);

    console.log(country);

    return (
        <section className={`${styles['section']} ${styles[mode]}`}>
            <Container>
                <div className={styles['wrapper']}>
                    <Button className={styles['btn-back']} onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                        Back
                    </Button>
                    <div className={styles['main']}>
                        <img className={styles['flag']} src={country.flag} alt={country.name} />
                        <div className={styles['block']}>
                            <h2 className={styles['title']}>{country.name}</h2>
                            <div className={styles['infos-row']}>
                                <div className={styles['infos']}>
                                    <div className={styles['info']}>
                                        <span className={styles['info-title']}>Native Name: </span>
                                        <span className={styles['info-value']}>{country.nativeName}</span>
                                    </div>
                                    <div className={styles['info']}>
                                        <span className={styles['info-title']}>Population: </span>
                                        <span className={styles['info-value']}>{country.population}</span>
                                    </div>
                                    <div className={styles['info']}>
                                        <span className={styles['info-title']}>Region: </span>
                                        <span className={styles['info-value']}>{country.region}</span>
                                    </div>
                                    <div className={styles['info']}>
                                        <span className={styles['info-title']}>Sub Region: </span>
                                        <span className={styles['info-value']}>{country.subregion}</span>
                                    </div>
                                    <div className={styles['info']}>
                                        <span className={styles['info-title']}>Capital: </span>
                                        <span className={styles['info-value']}>{country.capital}</span>
                                    </div>
                                </div>
                                <div className={styles['infos']}>
                                    <div className={styles['info']}>
                                        <span className={styles['info-title']}>Top Level Domain: </span>
                                        <span className={styles['info-value']}>{country.topLevelDomain}</span>
                                    </div>

                                </div>
                            </div>
                            {country.borders && (
                                <div className={styles['borders']}>
                                    <span className={styles['borders-title']}>Border Countries: </span>
                                    <ul className={styles['borders-list']}>
                                        {country.borders.map((border) => (
                                            <li key={crypto.randomUUID()}
                                                className={styles['borders-item']}>{border}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CountryPage;
