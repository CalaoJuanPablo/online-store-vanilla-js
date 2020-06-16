import { api } from '../../../api'
import { Product } from '../'
import './Products.scss'

export function Products() {
	const view = `
		<main class="Products">
			${api.data.map((product) => Product(product)).join('')}
		</main>
	`

	return view
}
