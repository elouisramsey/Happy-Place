import React, { Component } from 'react'
import ServicesStyle from '../styledComponents/ServicesStyles'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: "Free Cocktails",
                    info: 'Get your free cocktails from one of the best mixers in the country'
                },

                {
                    icon: <FaHiking />,
                    title: "Hiking",
                    info: 'Explore some of the best mountains in the country'
                },

                {
                    icon: <FaBeer />,
                    title: "Fine Beer",
                    info: 'Enjoy some of the best brewed beer'
                },

                {
                    icon: <FaShuttleVan />,
                    title: "Free Ride",
                    info: 'Free shuttle servies round the country'
                }
            ]
        }
    }

    render() {
        return (
            <ServicesStyle>
                <section className='services'>
                    <Title title='Services' />
                    <div className="services-center">
                        {this.state.services.map((service, index) => {
                            return <article key={index} className='service'>
                                <span>
                                    {service.icon}
                                </span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        })}
                    </div>
                </section>
            </ServicesStyle>
        )
    }

}

export default Services
