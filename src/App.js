import './App.css';
import { Router } from './screens/Router/Router';
import { ThemeProvider} from './context/themeContext'
import { CountProvider } from './context/countContext';
 
function App() {
  return (
    <CountProvider>
      <ThemeProvider>
        <div className="App">
          <Router />
        </div>
      </ThemeProvider>
    </CountProvider>
  );
} 

export default App;