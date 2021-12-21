import NumberList from '../components/NumberList'

export default function Index(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11];
    return(
        <>
            <NumberList numbers ={numbers} />
        </>
    );
}