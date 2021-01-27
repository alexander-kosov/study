import React from 'react';
import styles from './text.less';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
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
    color?: EColors;
}

export default function Text ({As='span', children}: ITextProps){

    return (
        <As>
            {children}
        </As>
    );
}