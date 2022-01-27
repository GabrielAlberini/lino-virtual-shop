import React from 'react'
import './Home.css'
import { Layout } from '../../components/Layout/Layout'
import { ContainerListItems } from '../../components/ContainerListItems/ContainerListItems'
import { Banner } from '../../components/Banner/Banner'
import { OptionProducts } from '../../components/OptionProducts/OptionProducts'
import { Title } from '../../components/Title/Title'
 
const Home = () => {

    return (
        <Layout>
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