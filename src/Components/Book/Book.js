import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IdContext } from '../../App';
const Book = ({book}) => {
    const {name,imageURL,price,author,_id}=book;
    return (
        <div className='col-md-4'>
            <Card className='mt-3'>
                <Card.Img src={imageURL} style={{height:'350px'}}></Card.Img>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>by {author}</Card.Subtitle>
                    <div className="d-flex justify-content-between mt-2">
                    <Card.Text >${price}</Card.Text>
                     <div className="button btn btn-success"><Link to={'/book/'+_id} className='text-white'>Buy Now</Link></div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;