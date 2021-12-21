
function PageDetail({description, stock, rating}){

    return(
        <>
           <p>{description}</p>
           <p>in stock: {stock}</p>
           <p>rating:{rating}</p>
        </>
    )
}

export default PageDetail