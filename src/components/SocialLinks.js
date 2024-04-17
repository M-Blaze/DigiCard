import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialLinks(props) {
    const { socialLinks,
        setSocialLinks,
        socialTitle,
        setSocialTitle,
        socialDesc,
        setSocialDesc
    }
        = props

    const handleTypeChange = (index, event) => {
        const { value } = event.target;
        const updatedLinks = [...socialLinks];
        updatedLinks[index].type = value;
        setSocialLinks(updatedLinks);
    };

    const handleFormChange = (event, index) => {
        let data = [...socialLinks]
        data[index][event.target.name] = event.target.value;
        setSocialLinks(data)
    }
    const addFields = () => {
        let object = { type: 'Facebook', url: '', title: 'Facebook', subtitle: 'Follow us on Facebook' }
        setSocialLinks([...socialLinks, object])
    }
    const removeFields = (index) => {
        let data = [...socialLinks];
        data.splice(index, 1)
        setSocialLinks(data)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'socialTitle') {
            setSocialTitle(value);
        } else if (name === 'socialDesc') {
            setSocialDesc(value);
        }
    };


    return (
        <div className='socialLinksContainer'>
           
            <div className="social-link">
                <label htmlFor="fullname">Title</label>
                <input value={socialTitle} onChange={handleInputChange} type="Text" name="socialTitle" placeholder="Enter your Title" ></input>
            </div>
            <div className="social-link">
                <label htmlFor="fullname">Description</label>
                <textarea value={socialDesc} onChange={handleInputChange} rows="5" cols="85" type="Textfield" className='textArea' name="socialDesc" placeholder="Description" ></textarea>
            </div>
            {socialLinks.map((social, index) => {
                return (
                    <div key={index} className='socialMediaContainer'>
                        <div onClick={() => { removeFields(index) }} className='garbageCan'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></div>

                        <div className='socialMediaLink'>
                            <select value={social.type} onChange={(e) => handleTypeChange(index, e)} className="socialMediaDrop" name="type" id="language">
                                <option value="Twitter">Twtitter</option>
                                <option value="Instagram" >Instagram</option>
                                <option value="LinkedIn" >LinkedIn</option>
                                <option value="Skype" >Skype</option>
                                <option value="Viber" >Viber</option>
                                <option value="Facebook">Facebook</option>
                            </select>
                            <input className="socialMediaInput" value={social.url} onChange={(e) => handleFormChange(e, index)} type="text" name="url" placeholder="URL" ></input>
                        </div>
                        <div className="content">
                            <div className="social-link">
                                <label htmlFor="fullname">Title</label>
                                <input type="text" value={social.title} name="title" onChange={(e) => handleFormChange(e, index)} ></input>
                            </div>
                            <div className="social-link">
                                <label htmlFor="fullname">Description</label>
                                <input type="text" value={social.subtitle} name="subtitle" onChange={(e) => handleFormChange(e, index)} ></input>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div onClick={addFields} className="addComponent">
                <div >+ Add Component</div>
            </div>

        </div>
    );
}

export default SocialLinks;