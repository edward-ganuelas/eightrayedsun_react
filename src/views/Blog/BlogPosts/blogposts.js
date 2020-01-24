import React from 'react';
import './blogposts.scss';
import moment from 'moment';

export default (props) => {
    const blogPosts = props.blogPosts;
        return blogPosts.map((post) => {
            return ( 
                <div className="col-12 blog-post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p className="published-date">{moment(post.publish_date, 'YYYY-MM-DD').format('MMM, DD, YYYY')}</p>
                    { post.excerpt &&
                        <p>{post.excerpt}</p>
                    }
                </div>
            );
        });
}