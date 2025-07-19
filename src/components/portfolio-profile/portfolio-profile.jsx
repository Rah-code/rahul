import React, { useState } from 'react'
import './portfolio-profile.css'
import IMG1 from '../../assets/c.jpg'
import IMG2 from '../../assets/shopping.png'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let data = [

        {
            id: 1,
            image: IMG2,
            title: "Online Shopping System",
            github: "https://github.com/Rah-code/online-shopping"
        },
        {
            id: 2,
            image: IMG1,
            title: "Task Scheduling in Cloud Computing",
            github: "https://github.com/Rah-code"
        }
    ]
    data = data.sort((a, b) => b.id - a.id)


    const recordsPerPage = 2;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const lastPage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(lastPage + 1).keys()].slice(1)
    const handlePage = (item) => {
        setCurrentPage(item)
    }

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {
                    records.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank">Github</a>
                                    <Link to={`/portfolio/${id}`} className='btn btn-primary' target="_blank">Explanation</Link>
                                </div>


                            </article>
                        )
                    })
                }

            </div>

        </section >
    )
}

export default Portfolio