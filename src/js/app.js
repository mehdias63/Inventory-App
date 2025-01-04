import CategoryView from './categoryView.js'
import productView from './productView.js'
import ProductView from './productView.js'
document.addEventListener('DOMContentLoaded', () => {
	CategoryView.setApp()
	ProductView.setApp()
	console.log(ProductView)
	CategoryView.createCategoriesList()
	productView.createProductsList(productView.products)
})
