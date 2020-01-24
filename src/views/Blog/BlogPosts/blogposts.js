import React from 'react';

export default (props) => {
    const blogPosts = props.blogPosts;
        return blogPosts.map((post) => {
            return ( 
                <div className="col-12" key={post.id}>
                    <h2>{post.title}</h2>
                    { post.excerpt &&
                        <p>{post.excerpt}</p>
                    }
                </div>
            );
        });
}