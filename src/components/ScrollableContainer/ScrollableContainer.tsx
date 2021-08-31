export default function ScrollableContainer(props) {
	return <div className="overflow-x-scroll no-scrollbar">{props.children}</div>;
}
