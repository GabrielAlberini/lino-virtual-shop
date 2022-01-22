import React, { useState, useEffect } from 'react';
import './ListCategory.css';
import { Layout } from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom'
import {ContainerListItems} from '../../components/ContainerListItems/ContainerListItems'

const ListCategory = () => {
    const {category} = useParams()
    console.log(category)

    return (
        <Layout>
            <div className='container-section'>
            < ContainerListItems showOptions={false}/>
            </div>
        </Layout>
    )
}

export { ListCategory };