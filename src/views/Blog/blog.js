import React from 'react';
import client from '../../directus';
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
        console.log(this.savedPost);
    }
    BlogPosts = (props) => {
        const blogPosts = props.blogPosts;
        return blogPosts.map((post) => {
            return ( 
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    { post.excerpt &&
                        <p>{post.excerpt}</p>
                    }
                </div>
            );
        });
    } 
    render() {
        return (
            <>
                <div className="container-fluid blog">
                    <this.BlogPosts blogPosts={this.state.blogPosts} />
                </div>
            </>
        );
    }
}
export default Blog;