import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {id} = useParams()
    const [book,setBook]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/books/'+id)
        .then(res=>res.json())
        .then(data=>setBook(data[0]))
    })
    return (
        <div className='text-center'>
          <Card className='w-25 mx-auto'>
              <Card.Img src={book.imageURL} className=' img-fluid'></Card.Img>
          </Card>
          <h3>{book.name}</h3>
          <p>by {book.author}</p>
          <button className='btn btn-primary'>Check Out</button>
        </div>
    );
};

export default CheckOut;