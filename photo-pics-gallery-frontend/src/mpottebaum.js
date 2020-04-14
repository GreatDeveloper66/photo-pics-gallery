const DOMAIN = "http://localhost:3000"
const CATEGORIES_URL = `${DOMAIN}/categories`

const picturesView = document.querySelector("#pictures-view")

class CategoryList {
    constructor(categoriesJSON){
        this.createCategoryObjects(categoriesJSON)
        this.element = document.createElement("div")
        this.element.id = "categories"
        this.element.className = "ui celled list"
    }

    createCategoryObjects = (categoriesJSON) => {
        this.categories = categoriesJSON.map(category => new Category(category.id, category.name, category.recent_pictures))
    }

    render = (node) => {
        this.categories.forEach(category => {
            category.createNode()
            this.element.append(category.element)
        })
        node.append(this.element)
    }
}

class Category {
    constructor(id, name, pictures) {
        this.id = id
        this.name = name
        this.pictures = pictures
        this.element = document.createElement("div")
        this.element.className = "item"
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
        this.pictures.forEach(picture => {
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

    renderShowAll = () => {

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
                categoriesList.render(picturesView)
                addCategoriesListener(categoriesList)
            })
    })
}


function addCategoriesListener(categoriesList) {
    categoriesList.element.addEventListener("click", event => {
        if(event.target.className === "expand-category") {
            const button = event.target
            handleExpandCollapse(button, categoriesList)
        } else if(event.target.className === "show-all") {
            const showAll = event.target
            const url = CATEGORIES_URL + `/${showAll.dataset.id}`
            fetch(url)
                .then(resp => resp.json())
                .then(category => {
                    let pictures = ""
                    category.sorted_pictures.forEach(picture => {
                        pictures += `
                        <img class="picture" src="${picture.img_url}">
                        `
                    })
                })
        }
    })
}

const handleExpandCollapse = (button, categoriesList) => {
    const categoryId = parseInt(button.dataset.id)
    const category = categoriesList.categories.find(category => category.id === categoryId)
    if(button.innerText === "Expand") {
        button.innerHTML = "Collapse"
        category.renderExpansion()
    } else {
        button.innerHTML = "Expand"
        category.removeExpansion()
    }
}