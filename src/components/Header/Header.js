import { Title } from '../'
import './Header.scss'

export function Header(router) {
	const header = document.createElement('header')
	header.classList.add('Header')

	const logo = Title({
		variant: 'h2',
		className: 'Header__logo',
		innerText: 'OnlineStore'
	})
	logo.addEventListener('click', () => {
		router.push('/')
	})

	const headerNav = document.createElement('nav')
	headerNav.classList.add('Header__nav')

	const headerNavList = document.createElement('ul')

	const productsLink = document.createElement('li')
	productsLink.classList.add('Header__nav-link')
	productsLink.innerText = 'Products'
	productsLink.addEventListener('click', () => {
		router.push('/')
	})

	const cartLink = document.createElement('li')
	cartLink.classList.add('Header__nav-link')
	cartLink.innerHTML = '<i class="fas fa-shopping-cart"></i>'
	cartLink.addEventListener('click', () => {
		router.push('/cart')
	})

	headerNavList.appendChild(productsLink)
	headerNavList.appendChild(cartLink)

	headerNav.appendChild(headerNavList)

	header.appendChild(logo)
	header.appendChild(headerNav)

	// header.innerHTML = `
	// 	<h2 class="Header__logo"><a href="/">OnlineStore</a></h2>
	// 	<nav class="Header__nav">
	// 		<ul>
	// 			<li class="Header__nav-link">Products</li>
	// 			<li class="Header__nav-link"><i class="fas fa-shopping-cart"></i></li>
	// 		</ul>
	// 	</nav>
	// `

	return header
}
