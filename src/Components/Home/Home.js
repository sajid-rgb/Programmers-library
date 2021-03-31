import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        
            <div>
                <div className="d-flex justify-content-center text-center container">

<input type="text" placeholder='Enter book name' className='form-control w-50'/><button className='btn btn-success ml-3'>Search</button>
</div>
<div className='row container mx-auto mt-3'>
{
    books.map(book=><Book book={book} id={book._id}></Book>)
}
</div>
            </div>
    );
};

export default Home;