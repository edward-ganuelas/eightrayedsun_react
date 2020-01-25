import React from 'react';
import './filters.scss';

export default (props) => {
    const tags = props.tags;
    return (
        <div className="col-12 filters">
            <ul>
                {
                    tags.map(tag => <li><button>{tag}</button></li>)
                }
            </ul>
        </div>
    )
}