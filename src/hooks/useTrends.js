import { useState, useEffect } from 'react'
import { getTrends } from '../helpers/getTrends';

export const useTrends = () => {    
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getTrends()
            .then(trends => {                        
                setState({
                    data: trends,
                    loading: false,
                });
            });
    }, []); 

    return state;
}