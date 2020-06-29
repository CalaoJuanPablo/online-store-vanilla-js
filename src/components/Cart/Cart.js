import { api } from '../../../api'
import { Title } from '../'
import './Cart.scss'

function CartTableRow({ id, image, name, price }) {
	const cartTableRow = document.createElement('div')
	cartTableRow.classList.add('Cart__table--row')
	cartTableRow.innerHTML = `
		<span class="Cart__table--id">${id}</span>
		<figure class="Cart__table--image">
			<img src="${image}" alt="${name}" />
		</figure>
		<span class="Cart__table--name">${name}</span>
		<span class="Cart__table--price">$${price}</span>
	`

	return cartTableRow
}

function CartTable() {
	const productsInCart = api.cart

	console.log(productsInCart)

	const mainCartTable = document.createElement('main')
	mainCartTable.classList.add('Cart__table')

	const mainCartTableHeaders = document.createElement('div')
	mainCartTableHeaders.classList.add(
		'Cart__table--row',
		'Cart__table--header'
	)
	mainCartTableHeaders.innerHTML = `
		<span class="Cart__table--headerText">Id</span>
		<span class="Cart__table--headerText">Image</span>
		<span class="Cart__table--headerText">Name</span>
		<span class="Cart__table--headerText">Price</span>
	`
	mainCartTable.appendChild(mainCartTableHeaders)

	if (productsInCart.length > 0) {
		productsInCart
			.map((productInCart) => CartTableRow(productInCart))
			.forEach((row) => mainCartTable.appendChild(row))
	} else {
		mainCartTable.appendChild(
			Title({
				variant: 'h4',
				className: 'Cart--empty',
				innerText: 'There is no elements in the cart'
			})
		)
	}

	return mainCartTable
}

export function CartComponent(router) {
	const cartComponent = document.createElement('section')
	cartComponent.classList.add('Cart')

	const cartTitle = Title({
		variant: 'h1',
		className: 'Cart__title',
		innerText: 'Cart'
	})
	const cartSubtitle = Title({
		variant: 'h3',
		className: 'Cart__subtitle',
		innerText: 'Products you are about to shop'
	})
	const cartTable = CartTable()
	const cartBuyButtonSection = document.createElement('div')
	cartBuyButtonSection.classList.add('Cart__buyButton')

	const cartBuyButton = document.createElement('button')
	cartBuyButton.classList.add('btn', 'btn-primary')
	cartBuyButton.innerText = 'Buy'
	cartBuyButton.addEventListener('click', (event) => {
		event.preventDefault()
		alert('Thanks for buying')
		router.push('/')
	})

	cartBuyButtonSection.appendChild(cartBuyButton)

	cartComponent.appendChild(cartTitle)
	cartComponent.appendChild(cartSubtitle)
	cartComponent.appendChild(cartTable)
	cartComponent.appendChild(cartBuyButtonSection)

	return cartComponent
}
