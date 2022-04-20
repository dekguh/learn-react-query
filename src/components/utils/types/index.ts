export interface IButtonCustom {
    text?: string;
    sx?: {
        [key: string]: string | number;
    };
    dataTestId?: string;
}

export interface ICardTodo {
    date?: string;
    title?: string;
}