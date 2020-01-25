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
            tags: ['clear'],
            blogTags: [],
            processedBlogPosts: []
        }
    }
    async componentDidMount() {
        const tags = await this.getTags();
        const blogTags = await this.getBlogTags();
        const blogPosts = await this.getPosts();
        this.setState({
            blogPosts,
            blogTags,
            tags: [this.state.tags, ...tags.map(tag => tag.tag)],
            processedBlogPosts: this.processBlogPosts(blogPosts)
        });
    }
    processBlogPosts(blogPosts) {
        return blogPosts.map((blogPost) => {
            const filteredBlogTags = this.state.blogTags.filter(blogTag => blogTag.blog_id === blogPost.id).map(blogTag => blogTag.tags_id);
            const filteredTags = this.state.tags.filter(tag => filteredBlogTags.includes(tag.id)).map(tag => tag.tag).sort((a,b) => a - b);
            blogPost.tags = filteredTags;
            return blogPost;
        }).filter(blogPost => {
            if (this.state.selectedTag === '') {
                return true;
            }
            return blogPost.tags.includes(this.state.selectedTag);
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
    setSelectedTag(tag) {
        const selectedTag = tag === 'clear' ? '' : tag;
        this.setState({
            selectedTag: selectedTag
        });
    }
    tagClicked(tag) {
        this.setSelectedTag(tag);
        this.setState({
            processedBlogPosts: this.processBlogPosts(this.state.blogPosts)
        });
    }
    render() {
        return (
            <>
                <div className="container-fluid blog">
                    <div className="container">
                        <div className="row">
                            <Filters tags={this.state.tags} />
                            <BlogPosts blogPosts={this.state.processedBlogPosts} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Blog;