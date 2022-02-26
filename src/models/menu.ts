export interface IMenu {
category: string;
items: Item[];
icon?: any;
}


interface Item {
    name: string;
    description: string;
    price: number;
    imagePath: string;
    isNotAvailable?: boolean;
}