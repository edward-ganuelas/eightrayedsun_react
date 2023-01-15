import React from 'react';
import './blogposts.scss';
import moment from 'moment';
import { Link, useRouteMatch } from "react-router-dom";

const BlogPosts = (props) => {
    let { path } = useRouteMatch();
    const blogPosts = props.blogPosts;
        return blogPosts.map((post) => {
            return ( 
                <div className="col-12 blog-post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p className="published-date">{moment(post.publish_date, 'YYYY-MM-DD').format('MMM, DD, YYYY')}</p>
                    {
                        post.tags && 
                        <p className="tags">{post.tags.join(', ')}</p>
                    }
                    { post.excerpt &&
                        <p>{post.excerpt}</p>
                    }
                    <p><Link to={`${path}/${post.id}`}>Read more</Link></p>
                </div>
            );
        });
};
export default BlogPosts;