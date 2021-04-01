import React, { useContext } from 'react';
import { UserContext } from '../../App';

const ManageBookInCheckOut = ({bookOrderList}) => {
    const {name,price,userEmail,userName,time}=bookOrderList;

    
    return (
        <div>
            <table className="container p-2 rounded" style={{backgroundColor:'whiteSmoke'}}>
                <tr lassName="d-flex justify-content-around ">
                    <td className="w-25 m-3" style={{borderBottom:'2px solid black'}}>{name}</td>
                    {/* <td className="w-25">{userName}</td> */}
                    <td className="w-25 m-3" style={{borderBottom:'2px solid black'}}>{userEmail}</td>
                    <td className="w-25 m-3" style={{borderBottom:'2px solid black'}}>{price}</td>
                    <td className='w-25 m-3' style={{borderBottom:'2px solid black'}}>{time}</td>
                    
                </tr>
            </table>
        </div>
    );
};

export default ManageBookInCheckOut;