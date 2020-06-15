import './Header.scss'

export function Header() {
	const view = `
		<header class="Header">
			<h2 class="Header__logo}">OnlineStore</h2>
			<nav class="Header__nav">
				<ul>
					<li><span class="navigation-link" data-to="/">Products</span></li>
					<li class="Header__nav-link" data-to="/cart"><i class="fas fa-shopping-cart"></i><span></span></li>
				</ul>
			</nav>
		</header>
	`

	return view
}
