import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getPanier } from '../../js/actions/PanierActions'
const Panier = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPanier())
    }, [])
    const [total, setTotal] = useState(0)
    const panier = useSelector(state => state.panierReducer.panier)
    return (
        <div>
            {(!panier)? <h1>You dont have any product in your Cart</h1>:
            panier && panier.listProducts.map(product=>
            <div className='container m-4'style={{display:"flex",flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
                <img src={product && product.product.imgUrl} width='100px' height='100px'/>
                <h6>{product && product.product.name}</h6>
                <span>{product && product.product.price}</span>
                <span>Qty: {product && product.quantity}</span>
                <span>Total : {product.quantity*product.product.price}</span>
            </div>
            )
            }
            <div className='container center'>
            {/* <span>{total}</span> */}
            <span className='btn btn-success' onClick={()=>alert('Your Order is Succesful')}>Pay</span>
            </div>
            
        </div>

    )
}

export default Panier
