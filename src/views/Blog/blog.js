import React from 'react';
import client from '../../directus';
import BlogPosts from './BlogPosts/blogposts';
import moment from 'moment';
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
        const sortedBlogPostsByDate = response.data.sort((a, b) => {
            return moment(b.publish_date, 'YYYY-MM-DD').unix() - moment(a.publish_date, 'YYYY-MM-DD').unix();
        });
        this.setState({
            blogPosts: sortedBlogPostsByDate
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