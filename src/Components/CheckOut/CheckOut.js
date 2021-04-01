import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const {id} = useParams()
    const [book,setBook]= useState([])
    const [loading,setLoading] = useState(true)
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5000/books/'+id)
        .then(res=>res.json())
        .then(data=>{
            setBook(data[0])
            setLoading(false)
        })
    })
    const date = new Date()
    const time = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" "+date.getHours() +':'+ date.getMinutes()
    console.log('date', date); 
    const books = {
        name:book.name,
        price:book.price,
        userEmail:loggedInUser.email,
        userName:loggedInUser.name,
        time:time
    }
    const handleAddToCart = () =>{
        fetch('http://localhost:5000/checkout',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(books)
        })

    }
    return (
        <div className='text-center'>
            {
        loading ? <div className="d-flex justify-content-center align-items-center w-100">
            <div class="spinner-border text-warning text-center" style={{width:'3rem',height:'3rem'}} role="status">
      </div>
        </div>:<div >
        <Card className='w-25 mx-auto'>
              <Card.Img src={book.imageURL} className=' img-fluid'></Card.Img>
          </Card>
          <h3 className='text-danger' style={{fontWeight: 'bold'}}>{book.name}</h3>
          <p className='text-white'>by {book.author}</p>
          <Link to='/orders' className='text-white'><button className='btn btn-primary mb-4' onClick={handleAddToCart}>Check Out</button> </Link>
          </div>
    }
         
        </div>
    );
};

export default CheckOut;