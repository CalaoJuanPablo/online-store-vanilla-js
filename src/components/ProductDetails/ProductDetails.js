import { api } from '../../../api'
import { Title, Image, Text, AddToCartButton } from '../'
import './ProductDetails.scss'

export function ProductDetailsComponent({ productId }, router) {
	const product = api.getProduct(productId)
	const { id, name, image, description, price } = product[0]

	const main = document.createElement('main')
	main.classList.add('ProductDetails')

	const productDetailsPrice = document.createElement('div')
	productDetailsPrice.classList.add('ProductDetails__price')
	const priceSpan = document.createElement('span')
	priceSpan.innerHTML = `$${price}`
	productDetailsPrice.appendChild(priceSpan)
	productDetailsPrice.appendChild(AddToCartButton(id))

	main.appendChild(
		Title({
			variant: 'h1',
			className: 'ProductDetails__name',
			innerText: name
		})
	)
	main.appendChild(
		Image({
			className: 'ProductDetails__image',
			src: image,
			alt: name
		})
	)
	main.appendChild(
		Text({
			className: 'ProductDetails__description',
			innerText: description
		})
	)
	main.appendChild(productDetailsPrice)

	return main
}
