import React from 'react'
import personalProjectList from '../data/personalProjectsList.json'
import Accordion from './Accordion';


export default function PersonalProjects() {

    return (
    <section id="personalProjects" className='personalProjects__container anchor'>
      
      {/* Heading */}
        <div className='personalProjects__section-heading'>
            <h6>Personal</h6>
            <h1 className='personalProjects__heading-main'>Projects</h1>
        </div>

        {/* Project Accordion */}
        <div className='personalProjects__accordion'>
            <div className='accordion>'>
                {personalProjectList.map(({ id, title, overview, description, link, image, siteLink }) => (
                    <Accordion 
                        key={id}
                        title={title} 
                        overview={overview} 
                        description={description}
                        link={link} 
                        image={image} 
                        siteLink={siteLink}                  
                    />
                ))}
            </div>
        </div>

    </section>
  )
}
