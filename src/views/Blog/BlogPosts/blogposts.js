import React from 'react';
import './blogposts.scss';

export default (props) => {
    const blogPosts = props.blogPosts;
        return blogPosts.map((post) => {
            return ( 
                <div className="col-12 blog-post" key={post.id}>
                    <h2>{post.title}</h2>
                    { post.excerpt &&
                        <p>{post.excerpt}</p>
                    }
                </div>
            );
        });
}