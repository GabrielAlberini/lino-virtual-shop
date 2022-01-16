import './CardWidget.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Button } from '@mui/material';

const CardWidget = ({children}) => {
    return(
        <Button>
            <LocalGroceryStoreIcon />
            {children}
        </Button>
    )
}

export { CardWidget }