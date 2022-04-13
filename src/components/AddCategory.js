import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CategoryTrends } from './CategoryTrends';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (inputValue.length>2) {
            setCategories(cat => {
                return (!cat.find(c => c === inputValue)) ? 
                    [inputValue, ...cat] : 
                    cat
            });
            setInputValue('');
        }
    }

    return (<>
            <form data-testid="form" onSubmit={handleSubmit}>
                <div className="row">
                    <input
                        className="balloon"
                        id="category"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Ingrese la categoría" />
                        <label htmlFor="category">Category</label>
                </div>
            </form>
            <CategoryTrends setCategories={setCategories}/>
        </>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}