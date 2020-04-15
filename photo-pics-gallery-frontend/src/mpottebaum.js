const DOMAIN = "http://localhost:3000"
const CATEGORIES_URL = `${DOMAIN}/categories`
const PICTURES_URL = `${DOMAIN}/pictures`


class CategoryList {
    constructor(categoriesJSON){
        this.createCategoryObjects(categoriesJSON)
        this.element = document.createElement("div")
        this.element.id = "categories"
        this.element.className = "ui middle aligned selection list"
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
            if(event.target.dataset.type === "category") {
                console.log(event.target)
                this.toggleExpandCollapse(event.target)
            } else if(event.target.className === "show-all") {
                const showAll = event.target
                const category = this.findCategory(showAll.dataset.id)
                category.renderShowAll()
            }
        })
    }

    toggleExpandCollapse = div => {
        const category = this.findCategory(div.dataset.id)
        if(div.dataset.expanded === "false") {
            div.dataset.expanded = "true"
            category.renderExpansion()
        } else {
            div.dataset.expanded = "false"
            category.removeExpansion()
        }
    }

    findCategory = id => {
        const categoryId = parseInt(id)
        return this.categories.find(category => category.id === categoryId)
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
        const html = `<div class="ui huge header" data-type="category" data-expanded="false" data-id=${this.id}>${this.name}</div>`
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
                this.allPictures = category.sorted_pictures
                const header = document.createElement("h1")
                header.innerText = this.name
                this.buildPicturesContainer()
                this.showContainer.innerHTML = ""
                this.showContainer.append(header, this.picturesContainer)
                this.addPictureClickListener()
            })
    }

    buildPicturesContainer = () => {
        this.picturesContainer = document.createElement("div")
        this.picturesContainer.id = "pictures"
        let pictures = ""
        this.allPictures.forEach(picture => {
            pictures += `
            <div class="left floated">
            <img class="category-picture ui big image" data-id=${picture.id} src="${picture.img_url}">
            <p>Likes: </p>
            <button class="like-button">Like Picture</button>
            </div>
            `
        })
        const pictureShowContainer = "<div id='show-picture'></div>"
        this.picturesContainer.innerHTML = pictureShowContainer + pictures
    }

    addPictureClickListener = () => {
        this.picturesContainer.addEventListener("click", event => {
            if(event.target.tagName === "IMG") {
                const imgTag = event.target
                const url = PICTURES_URL + `/${imgTag.dataset.id}`
                    fetch(url)
                        .then(resp => resp.json())
                        .then(picture => {
                            const pictureObj = new Picture(picture)
                            pictureObj.renderShow()
                            pictureObj.card.style.float = "right"
                            pictureObj.card.style.marginRight = "30px"
                        })
            }
        })
    }
}

class Picture {
    constructor(picture) {
        this.url = picture.img_url
        this.creator = picture.creator
        this.categories = picture.categories
        this.container = document.querySelector("#show-picture")
    }

    renderShow = () => {
        this.card = document.createElement("div")
        const categoryHTML = this.createCategoriesHTML()
        const contents = `
        <img class="ui large image" src="${this.url}">
        <div>
            <h3>${this.creator.username}</h3>
            <p>Likes </p>
            <button class="like-button">Like Picture</button>
            <h5>Categories</h5>
            <div class="ui middle aligned selection list">${categoryHTML}</div>
        </div>
        `
        this.card.innerHTML = contents
        this.container.innerHTML = ""
        this.container.append(this.card)
        this.addCategoryListener()
    }

    createCategoriesHTML = () => {
        let html = ""
        this.categories.forEach(category => {
            html += `<div class="item" style="font-size: 15px;" data-type="category" data-id=${category.id}>${category.name}</div>`
        })
        return html
    }

    addCategoryListener() {
        this.card.addEventListener("click", event => {
            if(event.target.dataset.type === "category") {
                const categoryDiv = event.target
                const selectedCategory = new Category(categoryDiv.dataset.id, categoryDiv.innerText)
                selectedCategory.renderShowAll()
            }
        })
    }

}











const addBrowsePicturesListener = () => {
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

const main = () => {
    addBrowsePicturesListener()
}

main()