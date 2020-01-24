import React from 'react';
import client from '../../directus';
import BlogPosts from './BlogPosts/blogposts';
import _ from 'lodash';
import './blog.scss';

class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        }
    }
    async componentDidMount() {
        await this.getPosts();
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
        // this.savedPost = response.data;
        this.setState({
            blogPosts: response.data
        });
    }
    render() {
        return (
            <>
                <div className="container-fluid blog">
                    <div className="container">
                        <div className="row">
                            <BlogPosts blogPosts={this.state.blogPosts} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Blog;