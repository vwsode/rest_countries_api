import { FC, ReactNode } from 'react';

import styles from './Typography.module.scss';

type Props = {
    children: ReactNode,
    variant: 'body1' | 'body2',
}

const Typography: FC<Props> = ({ children, variant }) => {
    return (
        <span className={`${styles['text']} ${styles[`${variant}`]}`}>
            {children}
        </span>
    );
};

export default Typography;
