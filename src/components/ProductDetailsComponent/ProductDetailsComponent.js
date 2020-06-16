import { api } from '../../../api'
export function ProductDetailsComponent({ productId }) {
	const product = api.getProduct(productId)
	const { id, name, image, description, price } = product[0]

	const view = `
		<main class="ProductDetailsComponent">
			<h1 class="ProductDetailsComponent__name">${name}</h1>
			<figure class="ProductDetailsComponent__image">
				<img src="${image}" alt="${name}"/>
			</figure>
			<p class="ProductDetailsComponent__description">${description}</p>
			<div class="ProductDetailsComponent__price">
				<span>$${price}</span>
				<button class="btn btn-primary">Add to Cart</button>
			</div>
		</main>
	`

	return view
}
