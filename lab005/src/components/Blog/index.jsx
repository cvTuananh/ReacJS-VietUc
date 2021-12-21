import Post from '../post'

export default function Blog(props) {
    const post = props.posts;
	return <>
        <h1>Welcome to the blog</h1>
        <ul>
            {post.map(item => <Post key={item.id} title={item.title}/>)}
        </ul>
    </>;
}
