export interface IButtonCustom {
    text?: string;
    sx?: {
        [key: string]: string | number;
    };
    dataTestId: string;
}