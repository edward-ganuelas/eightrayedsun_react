import React from 'react';
import client from '../../directus';
import BlogPosts from './BlogPosts/blogposts';
import Filters from '../../components/blog/filters/filters';
import moment from 'moment';
import _ from 'lodash';
import './blog.scss';

class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: [],
            selectedTag: '',
            tags: ['clear']
        }
    }
    async componentDidMount() {
        const tags = await this.getTags();
        const blogTags = await this.getBlogTags();
        const blogPosts = await this.getPosts();
        this.setState({
            blogPosts: blogPosts.map((blogPost) => {
                const filteredBlogTags = blogTags.filter(blogTag => blogTag.blog_id === blogPost.id).map(blogTag => blogTag.tags_id);
                const filteredTags = tags.filter(tag => filteredBlogTags.includes(tag.id)).map(tag => tag.tag).sort((a,b) => a - b);
                blogPost.tags = filteredTags;
                return blogPost;
            }),
            tags: [this.state.tags, ...tags.map(tag => tag.tag)]
        });
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
        return sortedBlogPostsByDate;
    }
    async getBlogTags() {
        const response = await client.getItems('blog_tags');
        return response.data;
    }
    async getTags() {
        const response = await client.getItems('tags', {
            filter: {
                tag_type: 'tech',
            }
        });
        return response.data;
    }
    render() {
        return (
            <>
                <div className="container-fluid blog">
                    <div className="container">
                        <div className="row">
                            <Filters tags={this.state.tags} />
                            <BlogPosts blogPosts={this.state.blogPosts} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Blog;