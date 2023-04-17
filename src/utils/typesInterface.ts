export interface Book {
    id: number
    amount: string;
    title: string;
    description?: string;
    thumbnail?: string;
    image?: string;
    qty?: number;
    subtitle?: string;
    publisher?: string;
    authors?: string;
    children?: JSX.Element | any;
    classNameSec?:string,
    classNameDiv?:string,
    classNameH1?:string,
    classNameH2?:string,
    classNameH3?:string,
    classNamePrice?:string
  }
  
 export interface Props {
    children: JSX.Element;
  }
  
  export interface INITIAL_STATE {
    book:Book
    cart:object[],
    total:number,
    itemCounter: number
  }