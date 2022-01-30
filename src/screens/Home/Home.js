import React, { useContext } from 'react'
import './Home.css'
import { Layout } from '../../components/Layout/Layout'
import { ContainerListItems } from '../../components/ContainerListItems/ContainerListItems'
import { Banner } from '../../components/Banner/Banner'
import { OptionProducts } from '../../components/OptionProducts/OptionProducts'
import { Title } from '../../components/Title/Title'
import { BannerLoader } from '../../components/BannerLoader/BannerLoader'
import { CountContext } from '../../context/countContext'

 
const Home = () => {
    const { stateLouder } = useContext(CountContext)
    
    return (
        <Layout className="scroll-hidden">
            { stateLouder && <BannerLoader /> }
            <Banner />
            <div className='container-section'>
                <Title showTitle={true} title={"Categorias"}/>
                <OptionProducts showOption={true}/>
                <Title showTitle={true} title={"Nuestros Productos"}/>
                <ContainerListItems />
            </div>
        </Layout>
    )
} 

export { Home };