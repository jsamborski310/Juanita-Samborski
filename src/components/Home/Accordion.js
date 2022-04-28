import React, {useState} from 'react'

    const Accordion = ({ id, title, overview, description, link, image, siteLink }) => {
    const [isActive, setIsActive] = useState(false);

        return (
            <div key={id}
                className="accordion-item accordion__accordion-item"
                onClick={() => setIsActive(!isActive)}>

                <div className="d-flex justify-content-between">
                    <h4 className="accordion-title accordion__accordion-title">{title}</h4>
                    <div><strong>{isActive ? '—' : '+'}</strong></div>
                </div>
                <p>{overview}</p>

                {isActive && 
                
                    <div className="row accordion-content accordion__accordion-content">


                        <div className='
                        col-6 order-2 order-sm-2 order-md-1 order-lg-1
                        accordion__accordion-description'>
                            <div>
                                <p>{description}</p>
                            </div>
                            <div>
                                <a className='accordion__link' href={link} rel='noreferrer' target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/icons/github.png"} alt="Github icon" width="auto" height="30px" /><p>View on Github</p>
                                </a>
                            </div>
                            <div>
                                <a className='accordion__link' href={siteLink} rel='noreferrer' target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/icons/desktop_icon.png"}
                                    alt="Desktop monitor icon" width="auto" height="25px" /><p>View Live</p>
                                </a>
                            </div>                          

                        </div>


                        <div className='
                        col-6 order-1 order-sm-1 order-md-2 order-lg-2
                        accordion__accordion-image'>
                            <img src={process.env.PUBLIC_URL + image} alt={title} />
                        </div>
                        
                    </div>}
            </div>
        )
    }
export default Accordion;