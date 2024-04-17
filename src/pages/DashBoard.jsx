import React from 'react';
import './dashboard.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';

function DashBoard() {
    const navigate = useNavigate()
    const [digiCards, setDigiCards] = useState([]);
    const [loading, setLoading] = useState(true);
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

            const response = await axios.get(`/digiCardsByUser/${userInfo.data._id}`, config);
            setDigiCards(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching digiCards:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userInfo) {
            fetchDigiCards();
        } else {
            navigate('/login')
        }
    // eslint-disable-next-line
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
                        </tr>
                    </thead>
                    <tbody>
                        {digiCards.map((digiCard, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link to={`/digitalcardPage/${digiCard._id}`}>View Digital Card</Link>
                                </td>
                                <td>
                                    <QRCodeGenerator url={`${process.env.REACT_APP_CLIENT_DOMAIN}/digitalcardPage/${digiCard._id}`} />
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
