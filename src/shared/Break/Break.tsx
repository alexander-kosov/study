import React from 'react';
import styles from './break.less';
import classNames from 'classnames';

type TBreakSize = 4 | 8 | 12 | 16 | 20;
type TDisplays = 'mobile'|'tablet'|'desktop';

interface IBreakProps {
    inline: boolean;
    top: boolean;
    size: TBreakSize;
    mobileSize?: TBreakSize;
    tabletSize?: TBreakSize;
    desktopSize?: TBreakSize;
}

export default function Break (props: IBreakProps){
    const {
        inline = false,
        top = false,
        size,
        mobileSize,
        tabletSize,
        desktopSize,
    } = props;

    return (
        <div className={classNames(
            styles[`s${size}`],
            {[styles[`mobile_s${mobileSize}`]]: mobileSize},    
            {[styles[`tablet_s${tabletSize}`]]: tabletSize},    
            {[styles[`desktop_s${desktopSize}`]]: desktopSize},    
            {[styles.inline]: inline},
            {[styles.top]: top}
        )}></div>
    );
}