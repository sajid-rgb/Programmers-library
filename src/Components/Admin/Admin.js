import { faPlus, faTasks, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddBooks from '../AddBooks/AddBooks';
import AdminAction from '../AdminAction/AdminAction';
import Loading from '../Loading/Loading';

const Admin = () => {
    const [books, setBooks] = useState([])
    const [adminActionHide, setAdminAction] = useState(true)
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
        <div className='mt-md-4 mt-0'>
            {
                loading ? <Loading></Loading> : <div className="row mb-4 ">
                    <div className="col-md-2 d-flex flex-column align-items-center bg-success g-0">
                        <Link className='  mt-3 text-white ' onClick={() => setAdminAction(true)}><FontAwesomeIcon icon={faTasks} className='text-dark mr-2'></FontAwesomeIcon>Manage Products</Link>
                        <Link className=' mt-2 text-white' style={{ marginRight: '40px' }} onClick={() => setAdminAction(false)}><FontAwesomeIcon icon={faPlus} className='text-dark mr-1'></FontAwesomeIcon> Add Books</Link>
                        <Link className=' mt-2 mb-3 mr-4 text-white' onClick={() => setAdminAction(true)}><FontAwesomeIcon icon={faUserEdit} className='text-dark mr-2' />Edit Products</Link>
                    </div>
                    <div className='col-md-10  mt-md-1 mt-0 table-responsive'>
                        {
                            adminActionHide ? <div>
                                <div className="bg-light">
                                    <tr className="d-flex justify-content-around text-dark ">
                                        <th className="w-50 m-3">Name</th>
                                        <th className="w-50 m-3">Author</th>
                                        <th className="w-25 m-3">Price</th>
                                        <th className=" mt-3 mr-3 mr-md-5">Action</th>
                                    </tr>
                                </div>
                                {
                                    books.map(book => <AdminAction book={book} key={book._id} ></AdminAction>)
                                }
                            </div> : <AddBooks></AddBooks>
                        }
                    </div>
                </div>
            }
        </div>

    );
};

export default Admin;