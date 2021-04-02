import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminAction.css'
import React from 'react';

const AdminAction = ({ book }) => {
    const { name, _id, author, price } = book;
    const handleDeleteBook = (id) => {
        fetch(`https://apricot-cupcake-42554.herokuapp.com/deleteBooks/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
            })
    }
    return (
        <div>
            <table className="container mt-0 bg-white">
                <tr className="d-flex justify-content-md-around text-dark ">
                    <td className="w-50 m-3 td" style={{ borderBottom: '2px solid black' }}>{name}</td>
                    <td className="w-50 m-3 td" style={{ borderBottom: '2px solid black' }}>{author}</td>
                    <td className="w-25 m-3 td" style={{ borderBottom: '2px solid black' }}>{price}</td>
                    <td className=""><p className='mt-4 mr-3 mr-md-5 d-flex' style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon><FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteBook(_id)} className='text-danger ml-2' /></p></td>
                </tr>
            </table>
        </div>
    );
};

export default AdminAction;