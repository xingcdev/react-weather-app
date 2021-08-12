export default function ScrollableContainer({ children }) {
	return <div style={{ overflowX: 'scroll' }}>{children}</div>;
}
