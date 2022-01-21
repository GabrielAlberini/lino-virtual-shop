// 1 - Importamos Create context de React
import { createContext, useState } from "react";

// 2 - Lo declaramos en una constante para no hacer llamada a el en cada momento.
const ThemeContext = createContext();

// 3 - Creamos este componente Theme provider que engloba a los componentes que 
//requieran del contexto. Se le aplica la propierdad children justamente
//para llamar los demás componentes dentro. 
const ThemeProvider = ({children}) => {
    // 5 - Hasta el número 4 es en todos los proyectos igual porque es la configuración 
    //de Create Context. Ahora pasamos a definir los estados. Se puede usar useState para
    //configurar estados.
    const [theme, setTheme] = useState(true);
    
    // 6 - Tambien se puede declarar estados con funciones.
    const changeTheme = () => {
        setTheme(!theme)
    }
    
    // 7 - para no pasarle solo un estado (en value del theme provider) definimos un objeto y guardamos dentro todas las posibilidades de estado.
    const data = {
        theme,
        changeTheme
    } 

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

// 4 - Se exporta tanto la constante que llama al Create context como al provider.
export { ThemeContext, ThemeProvider };