export class Router {
	constructor(routes, element) {
		this.routes = routes
		this.element = element
		this._loadInitialRoute()

		window.onpopstate = () => {
			this._loadInitialRoute()
		}
	}

	loadRoute(...urlSegments) {
		const matchedRoute = this._matchUrlToRoute(urlSegments)
		const url = `/${urlSegments.join('/')}`
		history.pushState({}, '', url)

		this.element.innerHTML = ''

		this.element.appendChild(
			matchedRoute.getTemplate(matchedRoute.params, this)
		)
	}

	_matchUrlToRoute(urlSegments) {
		const routeParams = {}

		const matchedRoute = this.routes.find((route) => {
			const routePathSegments = route.path.split('/').slice(1)

			if (routePathSegments.length !== urlSegments.length) {
				return false
			}

			const match = routePathSegments.every((routePathSegment, idx) => {
				return (
					routePathSegment === urlSegments[idx] ||
					routePathSegment[0] === ':'
				)
			})

			if (match) {
				routePathSegments.forEach((segment, idx) => {
					if (segment[0] === ':') {
						const propName = segment.slice(1)
						routeParams[propName] = decodeURIComponent(
							urlSegments[idx]
						)
					}
				})
			}
			return match
		})
		return { ...matchedRoute, params: routeParams }
	}

	push(path) {
		const pathSplit = path.split('/')
		const pathSegments = pathSplit.length > 1 ? pathSplit.slice(1) : ''

		this.loadRoute(...pathSegments)
	}

	_loadInitialRoute() {
		const pathnameSplit = window.location.pathname.split('/')
		const pathSegments =
			pathnameSplit.length > 1 ? pathnameSplit.slice(1) : ''

		this.loadRoute(...pathSegments)
	}
}
