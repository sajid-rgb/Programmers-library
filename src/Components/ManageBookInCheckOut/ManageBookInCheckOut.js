import React from 'react';
import './ManageBookCheckOut.css';
const ManageBookInCheckOut = ({ bookOrderList }) => {
    const { name, price, userEmail, time } = bookOrderList;
    return (
        <div>
            <div className=" mt-0 ml-md-3 mr-md-3 bg-success rounded shadow">
                <tr className=" d-flex justify-content-around text-white mt-4">
                    <td className="w-100 mt-3 td ml-2" >{name}</td>
                    <td className="w-100 mt-3 ml-4 td" >1</td>
                    <td className="w-100  mt-3 ml-3 td">{price}</td>
                    <td className="w-100 mt-3 td">{time}</td>
                </tr>
                <hr style={{ width: '100%' }} />
            </div>
        </div>
    );
};

export default ManageBookInCheckOut;