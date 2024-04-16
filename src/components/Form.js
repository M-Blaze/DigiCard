import React from 'react';
import './form.css'
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';
import Contact from './Contact';
import { useState } from 'react';


function Form(props) {
    const { contactDetails,
        setContactDetails,
        socialLinks,
        setSocialLinks,
        setFullName,
        fullName,
        position,
        setPosition,
        company,
        setCompany,
        about,
        setAbout,
        description,
        setDescription,
        socialTitle,
        setSocialTitle,
        socialDesc,
        setSocialDesc,
        handleFileChange,
        handleSubmit,

    } = props

    const [showContact, setShowContact] = useState(false);
    const [showSocialLinks, setShowSocialLinks] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'fullName') {
            setFullName(value);
        } else if (name === 'position') {
            setPosition(value);
        }
        else if (name === 'company') {
            setCompany(value)
        }
        else if (name === 'about') {
            setAbout(value)
        }
        else if (name === 'description') {
            setDescription(value)
        }
    };

    return (
        <div className='formDesign' >
            <div className="container2" style={{ backgroundColor: 'white' }}>
                <form action="" method="post" encType='multipart/form-data'>
                    <h2>Digital Business Cards</h2>
                    <div className="content">
                        <div className="box-content">
                            <label htmlFor="fullname">FullName</label>
                            <input value={fullName}
                                onChange={handleInputChange} type="text" name='fullName' placeholder="Enter your FullName" ></input>
                        </div>

                        <div className="box-content">
                            <label htmlFor="fullname">Position</label>
                            <input value={position} onChange={handleInputChange} name='position' type="text" placeholder="Enter Username" required></input>
                        </div>

                        <div className="box-content">
                            <label htmlFor="fullname">Company</label>
                            <input type="text" value={company} onChange={handleInputChange} name="company" placeholder="Enter your Email" required></input>
                        </div>
                    </div>
                    <div className='upload'>
                        <input name="image" type="file" onChange={handleFileChange} />

                    </div>
                    <div>
                        <div>
                            <h1>About</h1>
                        </div>
                        <div className="social-link">
                            <label htmlFor="fullname">Title</label>
                            <input value={about} onChange={handleInputChange} type="Text" name="about" placeholder="Enter your Title" ></input>
                        </div>
                        <div className="social-link">
                            <label htmlFor="fullname">Description</label>
                            <textarea value={description} onChange={handleInputChange} rows="5" cols="85" type="Textfield" className='textArea' name="description" placeholder="Description" ></textarea>
                        </div>
                    </div>
                    <div className='contactHeading'>
                        <h1>Contact Details</h1>
                        <div className='addContact' onClick={() => setShowContact(!showContact)}><FontAwesomeIcon className='addIcon' icon={faSquarePlus}/></div>
                    </div>
                    {showContact && (
                        <Contact contactDetails={contactDetails} setContactDetails={setContactDetails} />
                    )}
                    <div className='contactHeading' style={{marginBottom:20}}>
                        <h1>Social Links</h1>
                        <div onClick={() => setShowSocialLinks(!showSocialLinks)}><FontAwesomeIcon  className='addIcon' icon={faSquarePlus}/></div>
                    </div>
                    {showSocialLinks && (
                        <SocialLinks
                            socialLinks={socialLinks}
                            setSocialLinks={setSocialLinks}
                            socialTitle={socialTitle}
                            setSocialTitle={setSocialTitle}
                            socialDesc={socialDesc}
                            setSocialDesc={setSocialDesc}
                        />
                    )}
                    {/* <div className='socialLinksContainer'>
                        <div>
                            <h1>Social Links</h1>
                        </div>
                        <div className="social-link">
                            <label htmlFor="fullname">Title</label>
                            <input type="Text" name="Fullname" placeholder="Enter your Title" ></input>
                        </div>
                        <div className="social-link">
                            <label htmlFor="fullname">Description</label>
                            <textarea rows="5" cols="85" type="Textfield" className='textArea' name="Fullname" placeholder="Description" ></textarea>
                        </div>
                        {socialLinks.map((social, index) => {
                            return (
                                <div key={index} className='socialMediaContainer'>
                                    <div className='garbageCan'><FontAwesomeIcon onClick={()=>{removeFields(index)}} icon={faTrash}></FontAwesomeIcon></div>
                                    
                                    <div className='socialMediaLink'>
                                        <select value={social.type} onChange={(e) => handleTypeChange(index, e)} className="socialMediaDrop" name="type" id="language">
                                            <option value="Twtitter">Twtitter</option>
                                            <option value="Instagram++" >Instagram</option>
                                            <option value="LinkedIn" >LinkedIn</option>
                                            <option value="Skype" >Skype</option>
                                            <option value="Viber" >Viber</option>
                                            <option value="Facebook">Facebook</option>
                                        </select>
                                        <input className="socialMediaInput" value={social.url} onChange={(e)=>handleFormChange(e,index)} type="text" name="url" placeholder="URL" ></input>
                                    </div>
                                    <div className="content">
                                        <div className="social-link">
                                            <label htmlFor="fullname">Title</label>
                                            <input type="text" value={social.title} name="title" onChange={(e)=>handleFormChange(e,index)} placeholder="Enter your Link" ></input>
                                        </div>
                                        <div className="social-link">
                                            <label htmlFor="fullname">Description</label>
                                            <input type="text" value={social.subtitle} name="subtitle"  onChange={(e)=>handleFormChange(e,index)} placeholder="Enter your Link" ></input>
                                        </div>
                                    </div>
                    
                                </div>

                            )
                        })}

                        <div className="addComponent">
                            <div onClick={addFields}>+ Add Component</div>
                        </div>

                    </div> */}
                    <div className="button-container">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;