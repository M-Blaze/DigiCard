import React from 'react';
import ContactDetails from "../components/ContactDetails";
import About from "../components/About";
import Footer from "../components/Footer";
import SocialDetails from '../components/SocialDetails';
import Form from '../components/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Info2 from '../components/Info2';
import { useParams } from 'react-router-dom';

import './home.css'
function Edit(props) {
    const { id } = useParams();
    const [fullName, setFullName] = useState('John doe')
    const [position, setPosition] = useState('position')
    const [company, setCompany] = useState('xyzCompany')
    const [socialTitle, setSocialTitle] = useState('Social Links')
    const [socialDesc, setSocialDesc] = useState('Description')
    const [about, setAbout] = useState('About')
    const [description, setDescription] = useState('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')

    const [contactDetails, setContactDetails] = useState([
        { Contact: { Label: 'Contact :', Number: '' } },
        { Email: { Label: 'Email :', EmailAddress: '' } },
        { Address: { Label: 'Address :', City: '', Country: '', State: '', Zipcode: '' } },
    ]);
    const [socialLinks, setSocialLinks] = useState([
        { type: 'Facebook', url: '', title: 'Facebook', subtitle: 'Follow us on Facebook' }
    ])

    const navigate = useNavigate()

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const handleSubmit = async (event) => {
        if (!userInfo) {
            event.preventDefault();
            navigate('/login')
        }
        else {
            event.preventDefault();
            try {
                const user = userInfo.data._id; // Get the user ID from your authentication mechanism
                const editData = {
                    user,
                    fullName,
                    position,
                    company,
                    socialTitle,
                    socialDesc,
                    about,
                    description,
                    contactDetails,
                    socialLinks,
                    selectedFile,
                };
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }

                const response = await axios.put(`http://192.168.1.14:5000/edit/${id}`, editData,config);
                console.log('Updated digiCard:', response.data);
                navigate('/dashboard')
                // Optionally, show a success message or redirect to another page
            } catch (error) {
                console.error('Error saving profile:', error);
                // Show an error message to the user
            }
        }

    };



    useEffect(() => {
    }, [contactDetails, socialLinks, fullName, position, userInfo]);

    return (
        <>
            <Navbar></Navbar>
            <div className='uiDesign'>
                <div>
                    <div><Form
                        position={position}
                        setPosition={setPosition}
                        fullName={fullName}
                        setFullName={setFullName}
                        setSelectedFile={setSelectedFile}
                        handleFileChange={handleFileChange}
                        about={about}
                        setAbout={setAbout}
                        description={description}
                        setDescription={setDescription}
                        contactDetails={contactDetails}
                        setContactDetails={setContactDetails}
                        socialLinks={socialLinks}
                        setSocialLinks={setSocialLinks}
                        company={company}
                        setCompany={setCompany}
                        socialTitle={socialTitle}
                        setSocialTitle={setSocialTitle}
                        socialDesc={socialDesc}
                        setSocialDesc={setSocialDesc}
                        handleSubmit={handleSubmit}
                    />
                    </div>
                </div>
                <div className='cardDesign'>
                    <Info2 selectedFile={selectedFile} position={position} fullName={fullName} company={company} />
                    <div className="container">
                        <About about={about} description={description} />
                        <ContactDetails contactDetails={contactDetails} />
                        <SocialDetails socialTitle={socialTitle} socialDesc={socialDesc} socialLinks={socialLinks} />
                    </div>
                    <Footer />

                </div>

            </div>
        </>
    );
}

export default Edit;