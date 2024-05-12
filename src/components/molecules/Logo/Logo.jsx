import React from 'react';
import LogoImage from '../../atoms/LogoImage';
import LogoTitle from '../../atoms/LogoTitle';
import styles from './Logo.module.css';

const Logo = ({
                  text,
                  size = 100,
                  color = '#000',
                  fontFamily = 'Arial, sans-serif',
                  verticalAlign = 'center',
                  horizontalAlign = 'flex-start',
                  textOrientation = 'horizontal',
                  textPosition = 'right',
                  className = ''
              }) => {
    const layoutClass = styles[`logo--${textPosition}`];

    return (
        <div className={`${styles.logo} ${layoutClass} ${className}`}>
            <LogoImage size={size} color={color} className={styles.logo__image} />
            {text && (
                <LogoTitle
                    size={size / 3} // Adjust title size relative to image
                    color={color}
                    fontFamily={fontFamily}
                    verticalAlign={verticalAlign}
                    horizontalAlign={horizontalAlign}
                    textOrientation={textOrientation}
                    className={styles.logo__text}
                >
                    {text}
                </LogoTitle>
            )}
        </div>
    );
};

export default Logo;
