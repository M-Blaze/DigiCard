import React, { useState, useEffect } from 'react';
import Info from '../components/Info';
import ContactDetails from '../components/ContactDetails';
import About from '../components/About';
import SocialDetails from '../components/SocialDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CardPage() {
    const { id } = useParams();
    const [digiCards, setDigiCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDigiCards = async () => {
        try {
            const response = await axios.get(`/digiCards/${id}`);

            setDigiCards(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching digiCards:', error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchDigiCards()
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div style={{margin: '30px auto'}} className="cardDesign">
                <Info selectedFile={digiCards.img} position={digiCards.position} fullName={digiCards.fullName} company={digiCards.company} />
                <div className="container">
                    <About about={digiCards.about} description={digiCards.description} />
                    <ContactDetails contactDetails={digiCards.contactDetails} />
                    <SocialDetails socialTitle={digiCards.socialTitle} socialDesc={digiCards.socialDesc} socialLinks={digiCards.socialLinks} />
                </div>
            </div>
        </div>
    );
}

export default CardPage;
