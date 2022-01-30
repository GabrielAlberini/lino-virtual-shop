import React from 'react'
import './AboutUs.css'
import { Layout } from '../../components/Layout/Layout'
import { BannerSection } from '../../components/BannerSection/BannerSection'
import InstagramIcon from '@mui/icons-material/Instagram';
import { ItemAboutUs } from '../../components/ItemAboutUs/ItemAboutUs'

const AboutUs = () => {

    const dataProfile = [
        {
            classCont: "container-profiles-item",
            classImg: "container-profiles-img",
            src: "https://i.ibb.co/D11TmT0/vero.jpg",
            alt: "foto de lore",
            title: "Lore",
            itemTxt: "Imagen y ventas"
        },
        {
            classCont: "container-profiles-item",
            classImg: "container-profiles-img",
            src: "https://i.ibb.co/7RmPWPv/chicop.jpg",
            alt: "foto de Chino",
            title: "Chino",
            itemTxt: "Producción"
        }   
    ]

    return (
        <>
            <Layout>
                <div className='about-us'>
                    <BannerSection title={"¿Quienes somos?"}/>
                    <div className='container-section section-about'>
                        <div className='container-info'>
                            <div className='container-info-text'>
                                <h3><b>Chino y Lore</b></h3>
                                <p>Somos dos jóvenes de Santa Fe. LINO Nació a mediados de 2019 con el objetivo de sumar en la ciudad un emprendimiento que se fortalezca en productos veganos libres de crueeldad animal y fabricados 100% artesanlmente. Nuestro objetivo es seguir creciento y ampliar nuestro alcance. Gracias por confiar en nosotros.</p>
                            </div>
                            <div className='containter-info-img'>
                                <img src="https://i.ibb.co/kS9rgQj/chino.jpg" alt="foto de perfil de chino y lore" />
                            </div>
                        </div>
                        <div className='container-profiles'>
                            {
                                dataProfile.map((item, i) => {
                                    return <ItemAboutUs key={i} data={item} />
                                })
                            }
                        </div>
                        <div className='container-sr'>
                            <div className='container-sr-item'>
                                <div>
                                    <p>Seguínos en Instagram</p>
                                    <a href="https://www.instagram.com/linocomidas.santafe/" rel='noreferrer' target="_blank">
                                        <InstagramIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export { AboutUs };