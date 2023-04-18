export interface Book {
    id: number
    amount: string;
    title: string ;
    description: string;
    thumbnail: string;
    image: string;
    qty: number;
    subtitle: string;
    publisher: string;
    authors: string;
    children: JSX.Element | any;
    books:object
    classNameSec:string,
    classNameDiv:string,
    classNameH1:string,
    classNameH2:string,
    classNameH3:string,
    classNamePrice:string
    alt:string
  }

  export interface Data extends Book {
    items:object
    volumeInfo:object
    saleInfo:object
    imageLinks:string
    listPrice:object
  }
  export type Loading = boolean | Data | any;

 export interface Props {
    children: JSX.Element;
  }
  
  export interface INITIAL_STATE {
    book:{
      id: number,
      title:string,
      description: string,
      thumbnail: string,
      amount: string,
      qty:number,}
    cart:object[],
    total:number,
    itemCounter: number
  }
  
  
