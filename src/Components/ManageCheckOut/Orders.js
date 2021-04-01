import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ManageBookInCheckOut from '../ManageBookInCheckOut/ManageBookInCheckOut';
import pic from '../../tenor (1).gif'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const Orders = () => {
    const [book,setBook] = useState([])
    const [loading,setLoading] = useState(true)
    const [isOrderPlace,setIsOrderPlace] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/collect')
        .then(res=>res.json())
        .then(data=>{
            setBook(data)
            setLoading(false)
        })
    },[])
    let total = 0;
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const booksUser = book.filter(bk=>bk.userEmail===loggedInUser.email)
    
   booksUser.map(b=>{
            total=total+parseInt(b.price)
})
const handleOrderPlace = () =>{
    setIsOrderPlace(true)

}
 return (
        <div className="container">
            {
                 loading ? <div className="d-flex justify-content-center align-items-center w-100">
                 <div class="spinner-border text-warning text-center" style={{width:'3rem',height:'3rem'}} role="status">
           </div>
             </div>:<div>
             {
                isOrderPlace ? <div className="d-flex flex-column justify-content-center align-items-center">
                    <Card className='w-50 mt-5 img-fluid'>
                        <Card.Img src={pic}></Card.Img>
                    </Card>
                    <Link to='/'>Go Home</Link>
                </div>:<div className="container bg-dark rounded mt-4">
                 <div className="container ">
            <tr  className="d-flex justify-content-evenly">
                <th className="w-25 text-white">Book Name</th>
                {/* <th className="w-25">User Name</th> */}
                <th className="w-25 text-white">User Email</th>
                <th className="w-25 text-white">Price</th>
                <th className='w-25 text-white'>Order Time</th>
            </tr>
            </div>
           {
               booksUser.map(bk=><ManageBookInCheckOut bookOrderList={bk}  ></ManageBookInCheckOut>)
           }
           {/* <hr className='w-100 ' style={{color:'red'}} /> */}
           <div className="d-flex justify-content-center mb-4">
           <h3 className=' ml-5 text-white mt-2'>Total-{total}</h3>
           <button className='btn btn-success ml-3 mb-3 mt-2' onClick={handleOrderPlace}>Order Place</button>
           </div>
                </div>
            }
             </div>
            }
            
            
        </div>
    );
};

export default Orders;