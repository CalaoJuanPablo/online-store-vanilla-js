import { Header } from '../components'
import { Footer } from '../components'

export function MainTemplate({ children }, router) {
	const mainTemplate = document.createElement('div')
	mainTemplate.appendChild(Header(router))
	mainTemplate.appendChild(children)
	mainTemplate.appendChild(Footer())

	return mainTemplate
}
