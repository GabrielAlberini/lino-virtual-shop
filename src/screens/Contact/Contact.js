import React from 'react'
import './Contact.css'
import { Layout } from '../../components/Layout/Layout'
import { BannerSection } from '../../components/BannerSection/BannerSection'
import { FormContact } from '../../components/FormContact/FormContact'

const Contact = () => {

    return (
        <Layout>
            <div className='contact'>
                    <BannerSection/>
                    <div className='container-section section-contact'>
                        <div className='container-data-contact'>
                            <div>
                                <h4>Mándanos tu consulta.</h4>
                                <p>No tardaremos mucho en responder :</p>
                                <p>Estos son nuestros horarios de trabajo:</p>
                                <p><b>Lunes</b> a <b>viernes</b>: 9:00 a 16:00.</p>
                                <p><b>Sábados</b>: 9:00 a 11:00.</p>
                            </div>
                            <div className='container-data-wsp'>
                                <p>Mandanos un WhatsApp</p>
                                <p><b>342 - 123456789</b></p>
                            </div>
                        </div>
                        <FormContact />                        
                    </div>
                </div>
        </Layout>
    )
}

export { Contact };