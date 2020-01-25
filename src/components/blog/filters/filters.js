import React from 'react';
import './filters.scss';

export default (props) => {
    const tags = props.tags;
    const click = (tag) => props.tagClick(tag);
    return (
        <div className="col-12 filters">
            <ul>
                {
                    tags.map((tag, index) => <li key={index}>
                            <button onClick={() => click(tag)}>{tag}</button>
                        </li>)
                }
            </ul>
        </div>
    )
}