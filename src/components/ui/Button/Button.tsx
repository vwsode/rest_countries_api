import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { useTheme } from '@/hooks';

import styles from './Button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
}

const Button: FC<Props> = ({ children, className, ...props }) => {
    const { mode } = useTheme();

    return (
        <button className={`${styles['btn']} ${styles[mode]} ${className}`} {...props}>{children}</button>
    );
};

export default Button;
