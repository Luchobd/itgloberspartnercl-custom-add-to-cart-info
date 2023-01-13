import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from "vtex.order-manager/OrderForm"
// import ProductGroup from './ProductGroup';
// import Totalizers from './Totalizers';
import ButtonGroup from './ButtonGroup';
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"


const AddToCartInfo = ({blockClass}:{blockClass: string}) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("Este producto tiene esta info: ", productInfo)
  console.log("Esto son mis totales: ", totalizers[0])
  return (
    <div className={container}>
      {
        items.map((item: any, index: number)=>{
          console.log(item)
          return(
           <div key={index} className="container__item">
            <div>
              <img src={item.imageUrls.at1x} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>{item.price / 100}</p>
              <p>Cant: {item.quantity}</p>
            </div>
           </div>
          )
        })
      }

      {/* <ProductGroup products={items}/> */}
      {/* <Totalizers totalizers={totalizers[0]} /> */}
      <hr />
      <div>
        <p>Tienes {items.length} productos en el carrito</p>
        <p>Total: ${totalizers?.value} / 100</p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo


/*
    <ProductGroup /> => Listado de productos
    <Totalizers /> => Valor Total
    <ButtonGroup /> => Acciones
*/
