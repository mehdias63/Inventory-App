import Storage from './storage.js'
const categoryTitle = document.querySelector('#category-title')
const categoryDescription = document.querySelector(
	'#category-description',
)
const addNewCategoryBtn = document.querySelector('#add-new-category')

class CategoryView {
	constructor() {
		addNewCategoryBtn.addEventListener('click', e =>
			this.addNewCategory(e),
		)
		this.categories = []
	}
	addNewCategory(e) {
		e.preventDefault()
		const title = categoryTitle.value
		const description = categoryDescription.value
		if (!title || !description) return
		Storage.saveCategory({ title, description })
		this.categories = Storage.getAllCategories()
		this.createCategoriesList()
		categoryTitle.value = ''
		categoryDescription.value = ''
	}
	setApp() {
		this.categories = Storage.getAllCategories()
	}
	createCategoriesList() {
		let result = `<option class="bg-slate-500 text-slate-300" value="">select a category</option>`
		this.categories.forEach(element => {
			result += `<option class="bg-slate-500 text-slate-300" value=${element.id}>${element.title}</option>`
		})
		const categoryDOM = document.getElementById('product-category')
		categoryDOM.innerHTML = result
	}
}

export default new CategoryView()
