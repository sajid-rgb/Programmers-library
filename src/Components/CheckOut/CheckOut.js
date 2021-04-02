import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams()
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://apricot-cupcake-42554.herokuapp.com/books/' + id)
            .then(res => res.json())
            .then(data => {
                setBook(data[0])
                setLoading(false)
            })
    })
    const date = new Date()
    const time = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + " " + date.getHours() + ':' + date.getMinutes()
    const books = {
        name: book.name,
        price: book.price,
        userEmail: loggedInUser.email,
        userName: loggedInUser.name,
        time: time
    }
    const handleAddToCart = () => {
        fetch('https://apricot-cupcake-42554.herokuapp.com/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(books)
        })
            .then(response => response.json())

    }
    return (
        <div className='text-center'>
            {
                loading ? <div className="d-flex justify-content-center align-items-center w-100">
                    <div class="spinner-border text-warning text-center" style={{ width: '3rem', height: '3rem' }} role="status">
                    </div>
                </div> : <div className='row container mx-auto mt-5'>
                    <div className="col-md-7 ">
                        <img src={book.imageURL} alt="" className='w-50'/>
                    </div>
                    <div className="col-md-5 mt-md-5 mt-0 text-md-left text-center">
                    <h4 className='text-warning text-bold mt-md-5 mt-0' style={{ fontWeight: 'bold' }}>{book.name}</h4>
                       <p className='text-md-white text-secondary'>by {book.author}</p>
                        <h4 className='text-danger' style={{ fontWeight: 'bold' }} >${book.price}</h4>
                        <Link to='/orders' className='text-white'><button className='btn btn-primary mb-4' onClick={handleAddToCart}>Check Out</button> </Link>
                    </div>
                    
                    
                </div>
            }
        </div>
    );
};

export default CheckOut;