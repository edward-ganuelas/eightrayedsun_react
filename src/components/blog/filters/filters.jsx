import React from 'react';
import './filters.scss';

const filters = (props) => {
    const tags = props.tags;
    const click = (tag) => props.tagClick(tag);
    return (
        <div className="col-12 filters">
            <ul>
                <li>Filter by tags: </li>
                {
                    tags.map((tag, index) => <li key={index}>
                            <button className='btn btn-dark' onClick={() => click(tag)}>{tag}</button>
                        </li>)
                }
            </ul>
        </div>
    )
};
export default filters;