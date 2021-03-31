import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IdContext } from '../../App';
import AdminAction from '../AdminAction/AdminAction';

const Admin = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="">
            <Link to='/addBooks' className='ml-2'>+ Add Books</Link>
            <div className="container">
            <tr  className="d-flex justify-content-around ">
                <th className="w-50">Name</th>
                <th className="w-50">Author</th>
                <th className="w-25">Price</th>
                <th>Action</th>
            </tr>
            </div>
            {
                books.map(book=><AdminAction book={book}></AdminAction>)
            }
        </div>
    );
};

export default Admin;