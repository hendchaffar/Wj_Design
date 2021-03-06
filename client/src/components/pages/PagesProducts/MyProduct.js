/*import React from 'react'
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getProduct} from '../../../js/actions/ProductAction';
import CardProduct from '../PagesProducts/CardProduct';
import Product from '../PagesProducts/Product';
import { Link } from "react-router-dom";

const MyProduct = () => {
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getProduct());
    }, []);

    const myProduct = useSelector((state) => state.ProductReducer.products.product);
    console.log(myProduct)
    return (
    
    <div  style={{display:"flex",minWidth:"400px",minHeight:"900px",flexDirection:"column",maxWidth:"650px",alignContent:"center"}}>{//portfolios.name
    myProduct && myProduct.map((product) => 
    
    <CardProduct key={product._id}  product={product}/> 
    
    )
    
        }

    </div>

    );
};

export default MyProduct;*/
