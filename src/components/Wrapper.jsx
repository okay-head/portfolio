export default function Wrapper({ children, classVars }) {
	return (
		<div className={`content-wrapper max-w-screen-xl mx-8 xl:mx-auto ${classVars}`}>
			{children}
		</div>
	)
}
