import styles from './Header.module.scss'

export function Header() {
	const view = `
		<header class="${styles['Header']}">
			<h2 class="${styles['Header__logo']}">OnlineStore</h2>
			<nav class="${styles['Header__nav']}">
				<ul>
					<li><span class="navigation-link" data-to="/">Products</span></li>
					<li class="navigation-link" data-to="/cart"><i class="fas fa-shopping-cart"></i><span></span></li>
				</ul>
			</nav>
		</header>
	`

	return view
}
