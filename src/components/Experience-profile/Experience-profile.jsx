import React from 'react'
import './Experience-profile.css'
import { FaRegHandPointRight } from 'react-icons/fa'
import { FiCornerUpRight } from 'react-icons/fi'
import { AiOutlineLink } from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='skills'>
      <h2> My Experiences</h2>
      <div className="container experience__container">
        <div className='experience__frontend'>
          <h1>Toshiba Software India Pvt. Ltd.</h1>
          <h2>Software Engineer</h2>
          <h3>(01-08-2022 - Present)</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon' />
              <div>
                <h2>Data Engineering</h2>
                <h4> <FaRegHandPointRight /> Built and deployed scalable data pipelines using Apache Spark and Databricks.</h4>
                <h4> <FaRegHandPointRight /> Developed efficient ETL workflows to process, transform, and load large datasets.</h4>
                <h4> <FaRegHandPointRight /> Utilized Azure Data Factory, Blob Storage, and Azure Synapse for cloud-based data integration.</h4>
                <h4> <FaRegHandPointRight /> Migrated from 9.1 LTS DBR version to 15.4 LTS DBR version</h4>

              </div>
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon' />
              <div>
                <h2>Cloud Technologies</h2>
                <h4> <FaRegHandPointRight />Worked extensively with Azure Cloud Services for deploying and managing data solutions.</h4>
                <h4> <FaRegHandPointRight /> Deployed pipelines and resources using Azure DevOps CI/CD for automation.</h4>
                <h4> <FaRegHandPointRight /> Organizes conversations into channels for better focus and easy retrieval</h4>
                <h4> <FaRegHandPointRight /> Customizable notifications and alerts.</h4>
                <h4> <FaRegHandPointRight /> Improved organization and easy access to important information</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon' />
              <div>
                <h2>Analytics & Visualization</h2>
                <h4> <FaRegHandPointRight /> Created interactive Power BI dashboards to visualize business KPIs and trends.</h4>
                <h4> <FaRegHandPointRight /> Connected Power BI to multiple data sources and wrote complex DAX queries.</h4>
                <h4> <FaRegHandPointRight /> Enabled teams to make data-driven decisions through intuitive visual reports.</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon' />
              <div>
                <h2>DevOps & Infrastructure</h2>

                <h4><FiCornerUpRight />Deployed resources using Terraform for infrastructure as code.</h4>
                <h4> <FaRegHandPointRight /> Implemented CI/CD pipelines with Azure DevOps and GitHub Action</h4>
                <h4><FiCornerUpRight />Experience with version control using Git and GitHub.</h4>

              </div>

            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon' />
              <div>
                <h2>Messaging & Caching Systems</h2>
                <h4> <FaRegHandPointRight /> <b>Worked with Kafka for real-time data streaming and processing.</b></h4>
                <h4> <FaRegHandPointRight /> <b>Integrated Redis as a caching layer to improve application performance.</b></h4>


              </div>
            </article>


          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience