import Moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Loading from '../Loading/Loading';

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
    const moment = Moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")
    const books = {
        name: book.name,
        price: book.price,
        userEmail: loggedInUser.email,
        userName: loggedInUser.name,
        time: moment
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
                loading ? <Loading></Loading> : <div className='row container mx-auto mt-5'>
                    <div className="col-lg-6  text-lg-right text-center">
                        <img src={book.imageURL} alt="" className='w-50' />
                    </div>
                    <div className="col-lg-6 mt-lg-5 mt-0  text-lg-left text-center">
                        <h5 className='text-warning text-bold mt-lg-5 mt-1' style={{ fontWeight: 'bold' }}>{book.name}</h5>
                        <h5 className='text-md-white text-success text-bold mt-1 ml-0'>By {book.author}</h5>
                        <h4 className='text-danger' style={{ fontWeight: 'bold' }} >${book.price}</h4>
                        <Link to='/orders' className='text-white'><button className='btn btn-primary mb-4' onClick={handleAddToCart}>Check Out</button> </Link>
                    </div>


                </div>
            }
        </div>
    );
};

export default CheckOut;