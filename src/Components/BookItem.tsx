import { Book } from '../utils/typesInterface'

function BookItem({publisher,authors,image,alt,title,amount,children,classNameSec,classNameDiv,classNameH1,classNameH2,classNameH3,classNamePrice}:Partial<Book>) {
   
  return (
    
        <section className={classNameSec}>
                      <img className=' ' src= {image} alt={alt} />
                      <div className={classNameDiv}> 
                        <h1 className={classNameH1}>{title}</h1>
                        <h2 className={classNameH2}>{authors}</h2>
                        <h3 className={classNameH3}>{publisher}</h3>
                        <div className={classNamePrice}>{amount}</div>
                        <div className=''>{ children ? children[0] : null}</div> 
                        <div className=''>{children ? children[1] : null}</div>
                      </div>
                </section>
      
    
  )
}

export default BookItem
