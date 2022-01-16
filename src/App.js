import './App.css';
import { ContainerListItems } from './components/ContainerListItems/ContainerListItems';
import { Layout } from './components/Layout/Layout'
 
function App() {
  return (
    <div className="App">
        <Layout>
          <ContainerListItems /> 
        </Layout> 
    </div>
  );
}

export default App;
