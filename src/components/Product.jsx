import { useContext } from "react"
import { CartContext } from "../context/cart"

const Product = (props) => {
    const cart = useContext(CartContext)
    console.log(cart);
  return (
    <div className='pt-5  w-40 h-56 text-center m-5 rounded-xl bg-red-300'>
    <img className='w-20 h-20 object-cover rounded-lg ml-10' src={props.image} alt="" />
    <h4 className='font-bold text-xl'>{props.name}</h4>
    <p className='font-bold'>Price :{props.price}</p>
    <button onClick={()=>cart.setitems([...cart.items,{name:props.name,price:props.price}])} className='px-2 py-2 mt-5 rounded bg-white'>Add To Cart</button>
    </div>
    
  )
  

}

export default Product
