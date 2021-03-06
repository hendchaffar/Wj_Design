// import React from 'react'
// import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
// import {useDispatch,useSelector} from 'react-redux';
// import Category from "../PagesCategory/Category";
// import category from "../../../js/reducers/category";
// import { Link } from 'react-router-dom';
// import EditCategory from './EditCategory';
// //import { delete } from 'request';


// const CardCategory=({category})=> {

//     const dispatch = useDispatch();
//     const user = useSelector((state) =>state.authReducer.user);

//     return (
//         <div style={{minWidth:"300px", margin:"10px",display:"flex"}}>
//     <Card body inverse color="info">
//     <Link to='/Product'> 
//         <CardImg style={{width:"450",height:"400px"}}  src={category.imgUrl}/> 
//     </Link>
//         <CardTitle color="red" tag="h5">{category.name}</CardTitle>
//         <CardText>{category.description}</CardText>
//         <div className="flex row justify-content-around">
//     <EditCategory category={category} />
//     {
//     user && user.role==='admin'? 
//     <Button  onClick={()=>delet(category._id)} color="secondary">Delete </Button>:null 
//     }
//         </div>
//     </Card>
//         </div>
//     )
// }

// export default CardCategory;
