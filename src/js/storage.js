const products = [
	{
		id: 1,
		title: 'React.js',
		category: 'frontend',
		createdAt: '2021-10-31T15:02:00.411Z',
	},
	{
		id: 2,
		title: 'Node.js',
		category: 'backend',
		createdAt: '2021-10-31T15:03:23.556Z',
	},
	{
		id: 3,
		title: 'Vue.js',
		category: 'frontend',
		createdAt: '2021-11-01T10:47:26.889Z',
	},
]

const categories = [
	{
		id: 1,
		title: 'frontend',
		description: 'frontend of applications',
		createdAt: '2021-11-01T10:47:26.889Z',
	},
	{
		id: 2,
		title: 'backend',
		description: 'the backend of the applications',
		createdAt: '2021-10-01T10:47:26.889Z',
	},
]

export default class Storage {
	static getAllCategories() {
		const savedCategories =
			JSON.parse(localStorage.getItem('category')) || []
		const sortedCategories = savedCategories.sort((a, b) => {
			return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1
		})
		return sortedCategories
	}

	static saveCategory(categoryToSave) {
		const saveCategories = Storage.getAllCategories()
		const existedItem = saveCategories.find(
			c => c.id === categoryToSave.id,
		)
		if (existedItem) {
			existedItem.title = categoryToSave.title
			existedItem.description = categoryToSave.description
		} else {
			categoryToSave.id = new Date().getTime()
			categoryToSave.createdAt = new Date().toISOString()
			saveCategories.push(categoryToSave)
		}
		localStorage.setItem('category', JSON.stringify(saveCategories))
	}
	static getAllProducts(sort = 'newest') {
		const savedProducts =
			JSON.parse(localStorage.getItem('products')) || []
		const sortedProducts = savedProducts.sort((a, b) => {
			if (sort === 'newest') {
				return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1
			} else if (sort === 'oldest') {
				return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
			}
		})
		return sortedProducts
	}
	static saveProducts(productToSave) {
		const saveProducts = Storage.getAllProducts()
		const existedItem = saveProducts.find(
			c => c.id === productToSave.id,
		)
		if (existedItem) {
			existedItem.title = productToSave.title
			existedItem.quantity = productToSave.quantity
			existedItem.category = productToSave.category
		} else {
			productToSave.id = new Date().getTime()
			productToSave.createdAt = new Date().toISOString()
			saveProducts.push(productToSave)
		}
		localStorage.setItem('products', JSON.stringify(saveProducts))
	}
	static deleteProduct(id) {
		const savedProducts = Storage.getAllProducts()
		const filteredProducts = savedProducts.filter(
			p => p.id !== parseInt(id),
		)
		localStorage.setItem('products', JSON.stringify(filteredProducts))
	}
}
