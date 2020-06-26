export function Text({ className, innerText }) {
	const text = document.createElement('p')
	text.classList.add(className)
	text.innerText = innerText

	return text
}
