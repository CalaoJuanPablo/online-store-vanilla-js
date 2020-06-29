import { MainTemplate } from '../templates'
import { Products } from '../components'

export function Home(params, router) {
	const homeView = Products(params, router)

	return MainTemplate({ children: homeView }, router)
}
