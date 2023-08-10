import React from 'react';
import './dashboard.css'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';

function DashBoard(props) {
    const [digiCards, setDigiCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    const fetchDigiCards = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
            const response = await axios.get(`http://192.168.1.14:5000/digiCardsByUser/${userInfo.data._id}`, config);
            setDigiCards(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching digiCards:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            fetchDigiCards();

        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='dashBoard'>
            <h2>DashBoard</h2>
            <div className='tableContainer'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Details</th>
                            <th>QR code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {digiCards.map((digiCard, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td><Link to={`http://192.168.1.14:3000/digitalcardPage/${digiCard._id}`}>View Digital Card</Link></td>
                                {/* <td><QRCode ref={qrCodeRef} value={`http://localhost:3000/digitalcardPage/${digiCard._id}`} /></td> */}
                                <td>
                                    <QRCodeGenerator url={`http://localhost:3000/digitalcardPage/${digiCard._id}`} />
                                </td>

                                <td className="action">
                                    <button>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashBoard;
