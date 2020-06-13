import { Header } from '../components'

export function MainTemplate({ children }) {
	const view = `
		${Header()}
		${children}
	`

	return view
}
