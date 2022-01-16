import React, { useState, useEffect } from "react";
import './ListItems.css'
import { Item } from "../Item/Item";
import { API } from "../../API";
import CircularProgress from '@mui/material/CircularProgress';
import { logDOM } from "@testing-library/react";
import { Alarm } from "@mui/icons-material";


const ListItems = () => {

    const [users, setUsers] = useState([]);
    const [louder, setLouder] = useState(true)

    useEffect(() => {
        getUsers();
    }, []);

    
    const getUsers = () => {
        fetch(API)
        .then((response) => {
            return response.json()
        })
        .then((data)=> {
            setUsers(data.results)
        })
        .catch((err)=> {
            console.log(err, "Hubo un problema al cargar la API.")
        })
        .finally(() => {
            setLouder(false)
        })
    }

    return (
        <>
        {
            louder
            ?
            <CircularProgress />
            :
            <div className="container-list">
            {
                users.map((user)=> {
                    return <Item key={user.id} data={user}/>
                })
            }
            </div>
        }
        </>
    )
}

export {ListItems}