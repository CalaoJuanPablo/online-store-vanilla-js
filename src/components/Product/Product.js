import './Product.scss'

export function Product({ id, name, description, price, image }) {
	const view = `
		<article class="Product" id=${id}>
			<figure class="Product__image">
				<img src="${image}" alt="${name} image" />
			</figure>
			<h2 class="Product__name">${name}</h2>
			<p class="Product__description">${description}</p>
			<div class="Product__price">
				<span>$${price}</span>
				<button class="btn btn-primary">Add to Cart</button>
			</div>
		</article>
	`

	return view
}
