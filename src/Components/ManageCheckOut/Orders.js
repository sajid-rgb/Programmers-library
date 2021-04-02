import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ManageBookInCheckOut from '../ManageBookInCheckOut/ManageBookInCheckOut';
import pic from '../../tenor (1).gif'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const Orders = () => {
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
    const [isOrderPlace, setIsOrderPlace] = useState(false)
    useEffect(() => {
        fetch('https://apricot-cupcake-42554.herokuapp.com/collect')
            .then(res => res.json())
            .then(data => {
                setBook(data)
                setLoading(false)
            })
    }, [])
    let total = 0;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const booksUser = book.filter(bk => bk.userEmail === loggedInUser.email)
    // console.log('user',booksUser);
    booksUser.map(bookPr => {
        total = total + parseInt(bookPr.price)
    })
    const handleOrderPlace = () => {
        setIsOrderPlace(true)

    }
    return (
        <div className="">
            {
                loading ? <div className="d-flex justify-content-center align-items-center w-100">
                    <div class="spinner-border text-warning text-center" style={{ width: '3rem', height: '3rem' }} role="status">
                    </div>
                </div> : <div>
                    {
                        isOrderPlace ? <div className="d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0">
                            <Card className='w-50 mt-5 img-fluid'>
                                <Card.Img src={pic}></Card.Img>
                            </Card>
                            <Link to='/'>Go Home</Link>
                        </div> : <div className="bg-dark rounded mt-4 container pt-1">
                            <div className="bg-light mt-4  rounded shadow">
                                <tr className="d-flex justify-content-around text-dark mt-4">
                                    <th className="w-50 m-3">Book Name</th>
                                    <th className="w-50 m-3">User Email</th>
                                    <th className="w-25 m-3">Price</th>
                                    <th className="w-25 m-3">Order Time</th>
                                </tr>
                            </div>
                            {
                                booksUser.map(bk => <ManageBookInCheckOut bookOrderList={bk} key={bk._id} ></ManageBookInCheckOut>)
                            }
                            <div className="d-flex flex-column flex-md-row justify-content-center mb-4">
                                <h3 className=' ml-5 text-warning text-center mt-2 ml-4'>TOTAL = ${total}</h3>
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