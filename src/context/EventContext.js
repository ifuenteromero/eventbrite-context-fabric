import React, { createContext,useState, useContext } from 'react';
import axios from 'axios';
import { CategoriesContext } from './CategoriesContext';

export const EventContext = createContext();

export const EventProvider = ({children}) => {
    const {categories} = useContext(CategoriesContext); 
    const [events, setEvents] = useState([]);
    const token = 'LUXMFZYCQASMMAZINC5C';
    const order = 'date';

        
    const getEvents = async (category,name) => {
        const idCategory = categories.find(cat=>cat.name_localized===category).id
        const apiEndpoint = `https://www.eventbriteapi.com/v3/events/search/?q=${name}&categories=${idCategory}&sort_by=${order}&token=${token}&locale=es_ES`;
        const {data} = await axios(apiEndpoint);
        setEvents(data.events);
    }

    return ( 
        <EventContext.Provider 
            value={{
                events,
                getEvents,
            }}
        >
            {children}
        </EventContext.Provider>
     );
}
 