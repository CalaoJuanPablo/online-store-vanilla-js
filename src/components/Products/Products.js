import { api } from '../../../api'
import { AddToCartButton, Image, Title, Text } from '../'
import './Products.scss'

function Product({ id, name, description, price, image }, router) {
	const article = document.createElement('article')
	article.classList = 'Product'
	article.id = id

	const productName = Title({
		variant: 'h2',
		className: 'Product__name',
		innerText: name
	})
	productName.addEventListener('click', () => {
		const pathTo = `/product/${id}`
		router.push(pathTo)
	})

	const productPrice = document.createElement('div')
	productPrice.classList.add('Product__price')
	const priceSpan = document.createElement('span')
	priceSpan.innerHTML = `$${price}`

	productPrice.appendChild(priceSpan)
	productPrice.appendChild(AddToCartButton(id))

	article.appendChild(
		Image({ className: 'Product__image', src: image, alt: name })
	)
	article.appendChild(productName)
	article.appendChild(
		Text({ className: 'Product__description', innerText: description })
	)
	article.appendChild(productPrice)

	return article
}

export function Products(params, router) {
	const main = document.createElement('main')
	main.classList.add('Products')

	api.data.forEach((product) => main.appendChild(Product(product, router)))

	return main
}
