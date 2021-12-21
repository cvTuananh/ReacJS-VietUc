import NumberList from '../components/NumberList'
import Blog from '../components/Blog'

export default function Index(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11];
    return(
        <>
            <NumberList numbers={numbers} />
            <Blog posts={posts} />
        </>
    );
}

const posts =[
    {id: 1, title: 'Hello React', content: 'Welcome to learn React'},
    {id: 2, title: 'Installation', content: 'Flow page react.org'}
]