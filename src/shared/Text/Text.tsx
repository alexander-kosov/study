import React from 'react';
import styles from './text.less';
import classNames from 'classnames';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColor {
    black  =  'black',
    white  =  'white',
    orange =  'orange',
    green =  'green',
    greyF3 =  'greyF3',
    greyF4 =  'greyF4',
    greyD9 =  'greyD9',
    greyC4 = 'greyC4',
    grey99 =  'grey99',
    grey66 =  'grey66'
};

interface ITextProps {
    As?: 'span'| 'h1'| 'h2'| 'h3'| 'h4'| 'p'| 'div';
    children?: React.ReactNode;
    size: TSizes;
    mobileSize?: TSizes;
    desktopSize?: TSizes;
    tabletSize?: TSizes;
    color?: EColor;
}

export default function Text (props: ITextProps){
    const {As='span', color = EColor.black, children, size, mobileSize, desktopSize, tabletSize} = props;

    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize },
        styles[color]
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
}