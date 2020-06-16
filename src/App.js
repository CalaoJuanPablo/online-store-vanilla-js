import { routes, Router } from './routes'

export function App(element) {
	new Router(routes, element)
}
