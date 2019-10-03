import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({children}) => {
    const token = 'LUXMFZYCQASMMAZINC5C';
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState({category:'Seleccione una opción', name:'', idCategory:null});

    const getCategories = async () => {
        const url = `https://www.eventbriteapi.com/v3/categories/?token=${token}&locale=es_ES`;
        const { data } = await axios(url);
        setCategories(data.categories);
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFilters({
            ...filters,
            [name] : value
        })
    }

    useEffect( () => {
        getCategories();
    }
    ,[]);

    return(
        <CategoriesContext.Provider
            value = {{
                categories,
                handleChange,
                filters
            }}
        >
            {children}
        </CategoriesContext.Provider>
    );
}
