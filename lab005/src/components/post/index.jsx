export default function Post(props) {
    const title = props.title
	return <>
        <li>{title}-{props.content}</li>
    </>;
}
