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
            <table className="container mt-0 bg-white">
                <tr className="d-flex justify-content-around text-dark ">
                    <td className="w-50 m-3" style={{borderBottom:'2px solid black'}}>{name}</td>
                    <td className="w-50 m-3" style={{borderBottom:'2px solid black'}}>{author}</td>
                    <td className="w-25 m-3" style={{borderBottom:'2px solid black'}}>{price}</td>
                    <td className=""><button onClick={() =>handleDeleteBook(_id)} className='btn btn-danger m-3' style={{borderBottom:'2px solid black'}}>Delete</button></td>
                </tr>
            </table>
        </div>
    );
};

export default AdminAction;