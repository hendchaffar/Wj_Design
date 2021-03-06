/*import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { deleteAllUsers, getAllUsers } from '../../js/actions/authAction';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';

function Profile() {
    const dispatch = useDispatch();
useEffect(() => {
dispatch(getAllUsers())
}, [])
const users = useSelector((state) =>state.authReducer.users.users);
const delet=(user_id)=>{
    
    dispatch(deleteAllUsers(user_id))
    console.log(user_id)
    }

    return (
        <div>
    {users && users.map((el)=>
    <div  style={{padding:'30px',display:'flex',flexWrap:'colum'}}>
    <Card style={{width:400,padding:'10px'}}>
        <div style={{display:'flex',flexWrap:'colum'}}>
    <div style={{margin:'10px'}}>
        <CardImg style={{width:"100px",height:"100px"}}  src={el.avatar}/> 
    </div>
    <div style={{width:"300px",height:"100px", alignItems:'flex-end'}}>
        <div style={{display:'flex',flexWrap:'colum'}}>
        <CardTitle tag="h5">{el.name}  </CardTitle>
        <CardTitle tag="h5"> {el.lastName} </CardTitle>
        </div>
        <CardText> {el.email}</CardText>
    </div>
    </div>
    <Button  onClick={()=>delet(el._id)} color="secondary">Delete </Button>
    
    </Card>
    </div>
)
    }
        </div>
    )
}

export default Profile*/
