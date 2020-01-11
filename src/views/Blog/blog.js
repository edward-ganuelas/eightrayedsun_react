import React from 'react';
import client from '../../directus';
import _ from 'lodash';
import './blog.scss';

class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.blogPosts = null;
        this.savedPost = null;
    }
    componentDidMount() {
        this.getPosts();
    }
    async getPosts() {
        if (_.isObject(this.savedPost)) {
            return;
        }
        const response = await client.getItems('blog', {
            filter: {
                blog_type: "tech"
            }
        });
        console.log(response);
        // this.savedPost = response.data;
    }
    render() {
        return (
            <>
            <div className="container-fluid blog">
                
            </div>
            </>
        );
    }
}
export default Blog;