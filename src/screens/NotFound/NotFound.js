import React from 'react';
import './NotFound.css';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { Layout } from '../../components/Layout/Layout';

const NotFound = () => {
    return (
        <Layout showFooter={false}>
            <div className='container-error'>
                <p>(404) Página no encontrada</p>
                <HeartBrokenIcon />
            </div>
        </Layout>
    )
}

export { NotFound };