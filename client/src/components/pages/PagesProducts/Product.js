import React,{useEffect,useState} from 'react'
import {Button} from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {getProduct} from '../../../js/actions/ProductAction';
import CardProduct from '../PagesProducts/CardProduct';

const Product = ({}) => {
    const [NameFilter, setNameFilter] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {;
    dispatch(getProduct());
    }, []);
const myProduct = useSelector((state) => state.ProductReducer.products.product);

console.log(myProduct)
    return (

<div className='m-4 flex align-item-center ' >

    <input type="text" placeholder="Search for a Product..." 
        onChange={(e) => setNameFilter(e.target.value)}/> 

<div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:'space-around'}}>
{
myProduct && myProduct.filter((el)=>(el.name.toUpperCase().includes(NameFilter.toUpperCase().trim())))
.map((product,i)=><CardProduct product={product} key={i}/>)
}
</div>
    
        { /*<div >
        {
    myProduct && myProduct.map((product) => 
    
    <CardProduct key={product._id}  product={product}/> 
    
    )
    
        }

    </div> */}
</div>
    )
}

export default Product
