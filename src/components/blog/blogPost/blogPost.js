import client from '../../../directus';
import './blogPost.scss';

export default class BlogPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            blogPost: null
        };
    }

    async componentDidMount() {
        const response = await client.getItems('blog', {
            filter: {
                blog_type: "tech",
                id: this.state.id
            }
        });
        this.setState({
            blogPost: response.data[0]
        });
    }

    render() {
        return (
            <div className='container' id='blogPost'>
                <div className='row'>
                    <div className='col-12'>
                        {
                            this.state.blogPost &&
                            <>
                                <h2>{this.state.blogPost.title}</h2>
                                <div dangerouslySetInnerHTML={{__html: this.state.blogPost.post}}></div>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
