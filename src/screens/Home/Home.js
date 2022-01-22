import React from 'react'
import './Home.css'
import { Layout } from '../../components/Layout/Layout'
import { ContainerListItems } from '../../components/ContainerListItems/ContainerListItems'
import { Banner } from '../../components/Banner/Banner'
import { OptionProducts } from '../../components/OptionProducts/OptionProducts'

const Home = () => {
    return (
        <Layout>
            <Banner />
            <div className='container-section'>
                <OptionProducts showOption={true}/>
                <ContainerListItems />
            </div>
        </Layout>
    )
}

export { Home };