import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

import {CategoriesProvider} from './context/CategoriesContext';
import {EventProvider} from './context/EventContext';
import EventList from './components/EventList';

function App() {
    return (
        <>
        <Header />
        <div className="uk-container">
                <CategoriesProvider>
                    <EventProvider>
                            <Form />
                            <EventList/>
                    </EventProvider>
                </CategoriesProvider>
        </div>
        </>
    );
}

export default App;
