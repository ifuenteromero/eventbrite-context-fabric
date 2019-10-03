import React, {useContext} from 'react';
import { EventContext } from '../context/EventContext';
import Event from './Event';

const EventList = () => {
    const {events} = useContext(EventContext);
    // useEffect(() => {

    // },[events]);
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
                {events.map(ev=> {
                    const {id, logo, name,url } = ev;
                    return (
                        <div key={id}>
                            <Event
                                 logo={logo}
                                 name={name}
                                 url={url}
                             /> 
                        </div>
                    )}
                )}
        </div>
    );
}
 
export default EventList;