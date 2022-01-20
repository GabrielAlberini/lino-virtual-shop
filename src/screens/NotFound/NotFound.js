import React from 'react';
import './NotFound.css';
import { Layout } from '../../components/Layout/Layout';

const NotFound = () => {
    return (
        <Layout>
            <div className='container-section'>
                <p style={{fontSize: 50}}>(404) Página no encontrada</p>
            </div>
        </Layout>
    )
}

export { NotFound };