import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"
import { Link } from 'react-router-dom' 
import ProductItem from "./ProductItem"

const BestSeller = () => {
    const {products,currency} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() =>{
        const filteredProducts = products.filter((item) => (item.bestseller))
        setBestSeller(filteredProducts.slice(0,5))
    },[])

  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur Esse, aspernatur?
        </p>
      </div>

    {/*Rendenring Products*/}

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            bestSeller.map((item,index) =>(
                <ProductItem id={item.id} image={item.image} name={item.name} price={item.price} key={index}/>  
            ))
        }
    </div>

    </div>
  )
}

export default BestSeller
