import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ManageBookInCheckOut from '../ManageBookInCheckOut/ManageBookInCheckOut';
import pic from '../../tenor (1).gif'
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './Order.css'
import Loading from '../Loading/Loading';
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
    booksUser.map(bookPr => {
        total = total + parseInt(bookPr.price)
    })
    const handleOrderPlace = () => {
        setIsOrderPlace(true)

    }
    return (
        <div className="">
            {
                loading ? <Loading></Loading>: <div>
                    {
                        isOrderPlace ? <div className="d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0">
                            <div className='mt-md-5 mt-5 text-center align-items-center '  >
                                <img src={pic}  className='thank-div'></img>
                            </div>
                            <Button as={Link} to='/' className='text-white btn btn-success mt-2'>Go Home</Button>
                        </div> : <div className="bg-dark ml-md-3 mr-md-3  rounded mt-4  pt-1">
                            <div className="bg-light mt-4 ml-md-3 mr-md-3 rounded shadow">
                                {
                                    booksUser[0].userEmail && <h6 className='text-center'>Welcome {booksUser[0].userEmail}</h6>
                                }
                                <tr className="d-flex justify-content-evenly text-dark mt-4">
                                    <th className="w-100 mt-3 ml-2 mb-3" >Book Name</th>
                                    <th className="w-100 mt-3 ml-2 mb-3">Quantity</th>
                                    <th className="w-100 mt-3 ml-3 mb-3">Price</th>
                                    <th className="w-100 mt-3 mb-3">Order Time</th>
                                </tr>
                            </div>
                            {
                                booksUser.map(bk => <ManageBookInCheckOut bookOrderList={bk} key={bk._id} ></ManageBookInCheckOut>)
                            }
                            <div className="d-flex flex-column flex-md-row justify-content-center mb-4">
                                <h3 className='text-warning text-center mt-2 ml-md-4 ml-1'>TOTAL = ${total}</h3>
                                <button className='btn btn-success ml-md-3 ml-1 mr-1 mr-md-0 mb-3 mt-2' onClick={handleOrderPlace}>Order Place</button>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Orders;