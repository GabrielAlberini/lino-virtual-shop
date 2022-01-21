import './App.css';
import { Router } from './screens/Router/Router';
import { ThemeProvider} from './context/themeContext'
 
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
} 

export default App;