import React from 'react';
import client from '../../directus';
import BlogPosts from './BlogPosts/blogposts';
import Filters from '../../components/blog/filters/filters';
import Jumbotron from "../../components/jumbotron/jumbotron";
import moment from 'moment';
import _ from 'lodash';
import './blog.scss';

class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: [],
            tags: [],
            blogTags: [],
            processedBlogPosts: [],
            tagButtons: []
        }
    }
    async componentDidMount() {
        const tags = await this.getTags();
        const blogTags = await this.getBlogTags();
        const blogPosts = await this.getPosts();
        this.setState({
            blogPosts,
            blogTags,
            tags,
            tagButtons: ['clear', ...tags.map(tag => tag.tag)],
            processedBlogPosts: this.processBlogPosts(blogPosts)
        });
    }
    processBlogPosts(blogPosts, filter = 'clear') {
        return blogPosts.map((blogPost) => {
            const filteredBlogTags = this.state.blogTags.filter(blogTag => blogTag.blog_id === blogPost.id).map(blogTag => blogTag.tags_id);
            const filteredTags = this.state.tags.filter(tag => filteredBlogTags.includes(tag.id)).map(tag => tag.tag).sort((a,b) => a - b);
            blogPost.tags = filteredTags; 
            return blogPost;
        }).filter(blogPost => {
            if (filter === 'clear') {
                return true;
            }
            return blogPost.tags.includes(filter);
        })
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
    tagClicked(tag) {
        this.setState({
            processedBlogPosts: this.processBlogPosts(this.state.blogPosts, tag)
        });
    }
    render() {
        return (
            <div className="blog">
                <Jumbotron title="Blog" />
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <Filters tags={this.state.tagButtons} tagClick={this.tagClicked.bind(this)} />
                                <BlogPosts blogPosts={this.state.processedBlogPosts} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Photo by <a href="https://unsplash.com/@patrickian4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Fore</a> on <a href="https://unsplash.com/s/photos/blog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Blog;