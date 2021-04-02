import React from 'react';
import './ManageBookCheckOut.css';
const ManageBookInCheckOut = ({ bookOrderList }) => {
    const { name, price, userEmail, time } = bookOrderList;
    return (
        <div>
            <div className=" mt-0 bg-success rounded shadow">
                <tr className=" d-flex justify-content-around text-white mt-4">
                    <td className="w-50 m-3 td" style={{ borderBottom: '2px blue' }}>{name}</td>
                    <td className="w-50 m-3 td" style={{ borderBottom: '2px blue' }}>{userEmail}</td>
                    <td className="w-25 m-3 td" style={{ borderBottom: '2px  blue' }}>{price}</td>
                    <td className="w-25 m-3 td">{time}</td>
                </tr>
                <hr style={{ width: '100%' }} />
            </div>
        </div>
    );
};

export default ManageBookInCheckOut;