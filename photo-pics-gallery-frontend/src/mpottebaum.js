const DOMAIN = "http://localhost:3000"
const CATEGORIES_URL = `${DOMAIN}/categories`


class CategoryList {
    constructor(categoriesJSON){
        this.createCategoryObjects(categoriesJSON)
        this.element = document.createElement("div")
        this.element.id = "categories"
        this.element.className = "ui celled list"
        this.container = document.querySelector("#pictures-view")
    }

    createCategoryObjects = (categoriesJSON) => {
        this.categories = categoriesJSON.map(category => new Category(category.id, category.name, category.recent_pictures))
    }

    render = () => {
        this.categories.forEach(category => {
            category.createNode()
            this.element.append(category.element)
        })
        this.container.innerHTML = ""
        this.container.append(this.element)
    }

    addClickListener = () => {
        this.element.addEventListener("click", event => {
            if(event.target.className === "expand-category") {
                const button = event.target
                this.toggleExpandCollapse(button)
            } else if(event.target.className === "show-all") {
                const showAll = event.target
                const category = this.findCategory(showAll.dataset.id)
                category.renderShowAll()
            }
        })
    }

    findCategory = id => {
        const categoryId = parseInt(id)
        return this.categories.find(category => category.id === categoryId)
    }

    toggleExpandCollapse = button => {
        const category = this.findCategory(button.dataset.id)
        if(button.innerText === "Expand") {
            button.innerHTML = "Collapse"
            category.renderExpansion()
        } else {
            button.innerHTML = "Expand"
            category.removeExpansion()
        }
    }
}

class Category {
    constructor(id, name, recentPictures) {
        this.id = id
        this.name = name
        this.recentPictures = recentPictures
        this.element = document.createElement("div")
        this.element.className = "item"
        this.showContainer = document.querySelector("#pictures-view")
    }

    createNode = () => {
        const html = `
        ${this.name}
        <button class="expand-category" data-id=${this.id}>Expand</button>
        `
        this.element.innerHTML = html
    }

    renderExpansion = () => {
        let expansionText = `<button class="show-all" data-id=${this.id}>Show All Pictures</button>`
        this.recentPictures.forEach(picture => {
            expansionText += `
            <div class="ui medium images content">
                <img class="picture left floated" src="${picture.img_url}">
            </div>
            `
        })
        this.expansion = document.createElement("div")
        this.expansion.className = "expansion"
        this.expansion.innerHTML = expansionText
        this.element.append(this.expansion)
    }

    removeExpansion = () => {
        this.expansion.remove()
    }

    fetchShowAll = () => {
        const url = CATEGORIES_URL + `/${this.id}`
        return fetch(url)
            .then(resp => resp.json())
    }

    renderShowAll = () => {
        this.fetchShowAll()
            .then(category => {
                let pictures = ""
                category.sorted_pictures.forEach(picture => {
                    pictures += `
                    <img class="picture left floated" src="${picture.img_url}">
                    `
                })
                const categoryHTML = `
                    <h1>${this.name}</h1>
                    <div class="ui medium images content">${pictures}</div>
                    `
                this.showContainer.innerHTML = categoryHTML
            })
    }
}

class Picture {

}





main()

function main() {
    addBrowsePicturesListener()
}




function addBrowsePicturesListener() {
    const pictures = document.querySelector("#pictures")
    pictures.addEventListener("click", event => {
        event.preventDefault()
        fetch(CATEGORIES_URL)
            .then(resp => resp.json())
            .then(categories => {
                const categoriesList = new CategoryList(categories)
                categoriesList.render()
                categoriesList.addClickListener()
            })
    })
}