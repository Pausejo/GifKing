import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { useTrends } from '../hooks/useTrends';

export const CategoryTrends = ({setCategories}) => {

    const {data: trends, loading} = useTrends();

    const trendClick = (trend) => {
        setCategories(cat => {
            return (!cat.find(c => c === trend.target.textContent)) ? 
                [trend.target.textContent, ...cat] : 
                cat
        });
    }

    return (<>
                <h3 className='trending'><FontAwesomeIcon icon={faArrowTrendUp} /> Trending</h3>
                
                <ol className="filters">
                    {
                        trends.map(t =>
                            <li key={t}>
                                <label onClick={trendClick}>{t}</label>
                            </li>)
                    }
                </ol>

                {loading && <FontAwesomeIcon icon={faSync} spin size='1x' />}
            </>
    )
}
