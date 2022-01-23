import './ListCategory.css';
import { Layout } from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom'
import {ContainerListItems} from '../../components/ContainerListItems/ContainerListItems'
import { Title } from '../../components/Title/Title';

const ListCategory = () => {
    const {category} = useParams()
    console.log(category)

    return (
        <Layout>
            <div className='container-section'>
            <Title title={category} showTitle={true}/>
            < ContainerListItems showOptions={false}/>
            </div>
        </Layout>
    )
}

export { ListCategory };