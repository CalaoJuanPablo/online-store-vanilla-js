import { api } from '../../../api'
export function AddToCartButton(id) {
	const addToCartButton = document.createElement('button')
	addToCartButton.classList.add('btn', 'btn-primary')
	addToCartButton.innerHTML = 'Add to Cart'
	addToCartButton.addEventListener('click', () => {
		api.setProductInCart(id)
	})

	return addToCartButton
}
