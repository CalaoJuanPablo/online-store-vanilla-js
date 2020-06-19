import { Home, ProductDetails, Cart } from '../pages'

export const routes = [
	{
		path: '/',
		getTemplate: (params, routerInstance) => Home(params, routerInstance)
	},
	{
		path: '/product/:id',
		getTemplate: (params, routerInstance) =>
			ProductDetails({ productId: params.id }, routerInstance)
	},
	{
		path: '/cart',
		getTemplate: (params, routerInstance) => Cart(params, routerInstance)
	}
]
