import { api } from '../../../api'
import './ProductDetails.scss'

export function ProductDetailsComponent({ productId }) {
	const product = api.getProduct(productId)
	const { id, name, image, description, price } = product[0]

	const view = `
		<main class="ProductDetails">
			<h1 class="ProductDetails__name">${name}</h1>
			<figure class="ProductDetails__image">
				<img src="${image}" alt="${name}"/>
			</figure>
			<p class="ProductDetails__description">${description}</p>
			<div class="ProductDetails__price">
				<span>$${price}</span>
				<button class="btn btn-primary">Add to Cart</button>
			</div>
		</main>
	`

	return view
}
