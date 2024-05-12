import React from 'react';
import styles from './LogoTitle.module.css';

const LogoTitle = ({
                       children,
                       size = 'medium',
                       color = '#333',
                       fontFamily = 'Arial, sans-serif',
                       verticalAlign = 'center',
                       horizontalAlign = 'flex-start',
                       textOrientation = 'horizontal',
                       className = ''
                   }) => {
    const sizeClass = styles[`logoTitle--${size}`];
    const writingMode = textOrientation === 'vertical' ? 'vertical-rl' : 'horizontal-tb';

    return (
        <div
            className={`${styles.logoTitle} ${sizeClass} ${className}`}
            style={{
                color,
                fontFamily,
                display: 'flex',
                alignItems: verticalAlign,
                justifyContent: horizontalAlign,
                writingMode
            }}
        >
            {children}
        </div>
    );
};

export default LogoTitle;
