import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IdContext } from '../../App';
import AddBooks from '../AddBooks/AddBooks';
import AdminAction from '../AdminAction/AdminAction';

const Admin = () => {
    const [books,setBooks] = useState([])
    const [adminActionHide,setAdminAction] = useState(true)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data)
            setLoading(false)
        })
    },[])
    return (
        <div className='mt-4'>
            {
                 loading ? <div className="d-flex justify-content-center align-items-center w-100">
                 <div class="spinner-border text-warning text-center" style={{width:'3rem',height:'3rem'}} role="status">
           </div>
             </div>: <div className="row mb-4">
            <div className="col-md-2 d-flex flex-column bg-dark mt-md-0 mt-3">
            <Link  className=' text-center mt-3'onClick={() =>setAdminAction(true)}>Mange Products</Link>
            <Link  className='text-center mt-2' onClick={() =>setAdminAction(false)}>+ Add Books</Link>
            <Link  className='text-center mt-2' onClick={() =>setAdminAction(true)}>Edit Products</Link>
            </div>
            <div className='col-md-10 mt-md-0 mt-3'>
            {
                adminActionHide ?<div> 
                    <div className="bg-light">
            <tr  className="d-flex justify-content-around text-dark">
                <th className="w-50 m-3">Name</th>
                <th className="w-50 m-3">Author</th>
                <th className="w-25 m-3">Price</th>
                <th className=" m-3">Action</th>
            </tr>
            </div>
            {
                books.map(book=><AdminAction book={book}></AdminAction>)
            }
                    </div>:<AddBooks></AddBooks>
            }
            </div>
        </div>
            }
        </div>
       
    );
};

export default Admin;