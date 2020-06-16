import { Home, ProductDetails, Cart } from '../pages'

export const routes = [
	{
		path: '/',
		getTemplate: (params, data) => Home(data)
	},
	{
		path: '/product/:id',
		getTemplate: (params, data) =>
			ProductDetails({ productId: params.id }, data)
	},
	{
		path: '/cart',
		getTemplate: (params, data) => Cart({}, data)
	}
]
