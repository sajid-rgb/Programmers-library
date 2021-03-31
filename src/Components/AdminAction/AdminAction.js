import React from 'react';

const AdminAction = ({book}) => {
    const {name,_id,author,price}=book;
    const handleDeleteBook = (id)=>{
        fetch(`http://localhost:5000/deleteBooks/${id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div>
            <table className="container mt-3">
                <tr className="d-flex justify-content-around ">
                    <td className="w-50">{name}</td>
                    <td className="w-50">{author}</td>
                    <td className="w-25">{price}</td>
                    <td><button onClick={() =>handleDeleteBook(_id)} className='btn btn-danger'>Delete</button></td>
                </tr>
            </table>
        </div>
    );
};

export default AdminAction;