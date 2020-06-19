import { api } from '../../../api'
import './Cart.scss'

function CartTableRow({ id, image, name, price }) {
	const view = `
		<div class="Cart__table--row">
			<span class="Cart__table--id">${id}</span>
			<figure class="Cart__table--image">
				<img src="${image}" alt="${name}" />
			</figure>
			<span class="Cart__table--name">${name}</span>
			<span class="Cart__table--price">$${price}</span>
		</div>
	`

	return view
}

export function CartComponent() {
	const productsInCart = api.cart
	const view = `
		<section class="Cart">
			<h1>Cart</h1>
			<h3>Products you are about to shop</h3>
			<main class="Cart__table">
				<div class="Cart__table--row Cart__table--header">
					<span class="Cart__table--headerText">Id</span>
					<span class="Cart__table--headerText">Image</span>
					<span class="Cart__table--headerText">Name</span>
					<span class="Cart__table--headerText">Price</span>
				</div>
				${productsInCart.map((productInCart) => CartTableRow(productInCart))}
			</main>
			<div class="Cart__buyButton">
				<button class="btn btn-primary">Buy</button>
			</div>
		</section>
	`

	return view
}
