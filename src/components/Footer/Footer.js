import './Footer.scss'

export function Footer() {
	const footer = document.createElement('footer')
	footer.classList.add('Footer')
	footer.innerHTML = `<p>&copy; CalaoJuanPablo 2020</p>`

	return footer
}
