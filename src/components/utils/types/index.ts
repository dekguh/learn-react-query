import { MouseEventHandler } from 'react';

export interface IButtonCustom {
    text?: string;
    sx?: {
        [key: string]: string | number;
    };
    dataTestId?: string;
    onClick?: MouseEventHandler;
}

export interface ICardTodo {
    date?: string;
    title?: string;
    dataTestId?: string;
}

export interface IAddListTodo {
    setIsOpen?: (val : boolean) => any;
}

export interface IHomeHeading {
    onClickOpen?: MouseEventHandler;
}