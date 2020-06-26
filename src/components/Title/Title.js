export function Title({ variant = 'h3', className = '', innerText = '' }) {
	const title = document.createElement(variant)
	title.classList.add(className)
	title.innerText = innerText

	return title
}
