import React from 'react'
import './Home.css'
import { Layout } from '../../components/Layout/Layout'
import { ContainerListItems } from '../../components/ContainerListItems/ContainerListItems'
import { Banner } from '../../components/Banner/Banner'

const Home = () => {
    return (
        <Layout>
            <Banner />
            <div className='container-section'>
                <ContainerListItems />
            </div>
        </Layout>
    )
}

export { Home };