import { MainTemplate } from '../templates'
import { Products } from '../components'

export function Home(params, router) {
	const view = Products(params, router)

	return MainTemplate({ children: view })
}
