import React, {useContext} from 'react';
import {CategoriesContext} from '../context/CategoriesContext';
import { EventContext } from '../context/EventContext';

const Form = () => {
    const {categories,filters,handleChange} = useContext(CategoriesContext); 
    const {getEvents} = useContext(EventContext);
    const { category, name } = filters;

    return (
        <form onSubmit={e=>{ 
            e.preventDefault();
           getEvents(category,name)
        }}>
        <fieldset className="uk-fieldset uk-margin">
            <legend className="uk-legend uk-text-center">
                Busca tu event por Nombre o Categoría
            </legend>
        </fieldset>
        <div className="uk-column-1-3@m uk-margin">
            <div className="uk-margin" uk-margin="true">
                <input 
                    name ="name"
                    className ="uk-input"
                    type="text"
                    placeholder="Nombre de Evento o Ciudad"
                    value={name}
                    onChange={handleChange}
                    />
            </div>
            <div className="uk-margin" uk-margin="true">
                <select 
                    name="category" 
                    className="uk-select"
                    onChange={handleChange}
                >
                    <option 
                        value="Seleccione una opción"
                        defaultValue={category==="Seleccione una opción"}
                    >
                        Seleccione una opción
                    </option>
                    {categories.map(cat => {
                        const {id,name_localized: name} = cat;
                        return(
                            <option 
                                key={id}
                                value={name}
                                data-uk-form-select
                                defaultValue={name===category}
                            >
                                {name}
                            </option>
                    )})}
                </select>
            </div>
            <div className="uk-margin" uk-margin="true">
                <input 
                    type="submit" 
                    className="uk-button uk-button-danger"
                    value ="Busca Eventos"
                    //onClick={}
                />
            </div>
        </div>
        </form>
      );
}
 
export default Form;