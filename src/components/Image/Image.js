export function Image({ className, src = '', alt = '' }) {
	const figure = document.createElement('figure')
	figure.classList.add(className)

	const img = document.createElement('img')
	img.src = src
	img.alt = alt

	figure.appendChild(img)

	return figure
}
