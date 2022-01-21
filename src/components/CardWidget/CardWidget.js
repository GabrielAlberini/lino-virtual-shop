import './CardWidget.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Button } from '@mui/material';

const CardWidget = () => {
    return(
        <Button>
            <LocalGroceryStoreIcon />
        </Button>
    )
}

export { CardWidget }