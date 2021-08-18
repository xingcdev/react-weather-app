export default function ScrollableContainer({ children }) {
	return <div className="overflow-x-scroll no-scrollbar">{children}</div>;
}
