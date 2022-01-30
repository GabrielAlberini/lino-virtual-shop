import './ListCategory.css';
import { Layout } from '../../components/Layout/Layout';
import {ContainerListItems} from '../../components/ContainerListItems/ContainerListItems'

const ListCategory = () => {

    return (
        <Layout>
            <div className='container-section'>
            < ContainerListItems showOptions={false}/>
            </div>
        </Layout>
    )
}

export { ListCategory };