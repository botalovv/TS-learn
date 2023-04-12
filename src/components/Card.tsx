import React, {FC, useState} from 'react';
import {PropsWithChildren} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps extends PropsWithChildren{
    width: string;
    height: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({width, height, children, variant, onClick}) => {
    const [state, setState] = useState(0);
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : 'none'
        }} onClick={() => onClick(state)}>
            {children}
        </div>
    );
};

export default Card;