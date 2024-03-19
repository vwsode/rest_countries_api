import React, { FC, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

import { useTheme } from "@/hooks";

import styles from "./Select.module.scss";

type Option = {
    title: string;
    value: string;
};

type Props = {
    placeholder?: string;
    className?: string;
    onChange: (selected: Option["value"]) => void;
    options: Option[];
    selected: Option | null;
};

const Select: FC<Props> = ({ placeholder, className, onChange, options }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { mode } = useTheme();

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleClick);
    }, [isOpen]);

    const handleOptionClick = (
        ev: React.MouseEvent,
        value: Option["value"],
    ) => {
        ev.stopPropagation();
        
        setIsOpen(false);
        onChange?.(value);
    };

    const handleSelectClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            onClick={handleSelectClick}
            ref={rootRef}
            className={`${styles["select"]} ${styles[mode]} ${className}`}
        >
            <div className={styles["toggle"]}>
                <span className={styles["current-value"]}>{placeholder}</span>
                <FaChevronDown className={styles["chevron"]} />
            </div>
            {isOpen && (
                <ul className={styles["items"]}>
                    {options.map((item) => (
                        <li
                            onClick={(ev) => handleOptionClick(ev, item.value)}
                            key={item.value}
                            className={styles["item"]}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
