import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Loading from '../Loading/Loading';
const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://apricot-cupcake-42554.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <div className="d-flex justify-content-center text-center container mt-3">

                <input type="text" placeholder='Enter book name' className='form-control w-50' /><button className='btn btn-success ml-3'>Search</button>
            </div>
            {
                loading && <Loading></Loading>
            }
            <div className='row container mx-auto mt-3 mb-5'>
                {
                    books.map(book => <Book book={book} key={book._id}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;