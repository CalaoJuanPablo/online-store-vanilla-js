import './Header.scss'

export function Header() {
	const header = document.createElement('header')
	header.classList.add('Header')
	header.innerHTML = `
		<h2 class="Header__logo"><a href="/">OnlineStore</a></h2>
		<nav class="Header__nav">
			<ul>
				<li><a class="navigation-link" href="/">Products</a></li>
				<li><a class="Header__nav-link" href="/cart"><i class="fas fa-shopping-cart"></i><span></a></li>
			</ul>
		</nav>
	`

	return header
}
