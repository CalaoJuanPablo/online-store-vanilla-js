import { Product } from '../'
import './Products.scss'

export function Products(data) {
	console.log(data)
	const view = `
		<main class="Products">
			${data.data.map((product) => Product(product)).join('')}
		</main>
	`

	return view
}
