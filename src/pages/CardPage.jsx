import React, { useState, useEffect } from 'react';
import Info from '../components/Info';
import ContactDetails from '../components/ContactDetails';
import About from '../components/About';
import Footer from '../components/Footer';
import SocialDetails from '../components/SocialDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CardPage(props) {
    const { id } = useParams();

    const [digiCards, setDigiCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDigiCards = async () => {
        try {
            const response = await axios.get(` http://192.168.1.14:5000/digiCards/${id}`);
            setDigiCards(response.data);
            setLoading(false); // Set loading to false once data is fetched
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching digiCards:', error);
            setLoading(false); // Set loading to false in case of an error as well
        }
    };
    // http://192.168.1.14:3000/digitalcardPage/64d3c1df013d5b3668aceae5
    useEffect(() => {
        // Fetch digiCards data from the API
        console.log('hello')
        fetchDigiCards()

    }, []);

    // Conditional rendering based on loading state
    if (loading) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or any other UI element
    }

    return (
        <div>
            <div style={{margin:'auto'}} className="cardDesign">
                <Info selectedFile={digiCards.img} position={digiCards.position} fullName={digiCards.fullName} company={digiCards.company} />
                <div className="container">
                    <About about={digiCards.about} description={digiCards.description} />
                    <ContactDetails contactDetails={digiCards.contactDetails} />
                    <SocialDetails socialTitle={digiCards.socialTitle} socialDesc={digiCards.socialDesc} socialLinks={digiCards.socialLinks} />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default CardPage;
