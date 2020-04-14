const DOMAIN = "http://localhost:3000"
const CATEGORIES_URL = `${DOMAIN}/categories`

const view = document.querySelector("#view")

main()

function main() {
    addBrowsePicturesListener()
}

function addBrowsePicturesListener() {
    const browse = document.querySelector("#browse")
    browse.addEventListener("click", event => {
        fetch(CATEGORIES_URL)
            .then(resp => resp.json())
            .then(categories => {
                const categoriesList = renderCategoryList(categories)
                const categoriesDiv = document.createElement("div")
                categoriesDiv.id = "categories"
                categoriesDiv.innerHTML = categoriesList
                view.innerHTML = ""
                view.append(categoriesDiv)
                addCategoriesListener(categoriesDiv, categories)
            })
    })
}

function renderCategoryList(categories) {
    let categoryLis = ""
    categories.forEach(category => {
        categoryLis += `
        <li>
        ${category.name}
        <button class="expand-category" data-id=${category.id}>Expand</button>
        </li>
        `
    })
    return `<ul>${categoryLis}</ul>`
}

function addCategoriesListener(categoriesDiv, categories) {
    categoriesDiv.addEventListener("click", event => {
        if(event.target.className === "expand-category") {
            const expandButton = event.target
            expandButton.innerHTML = "Collapse"
            expandButton.className = "collapse-category"
            const expandedCategoryId = parseInt(event.target.dataset.id)
            const expandedCategory = categories.find(category => category.id === expandedCategoryId)
            const expansion = renderExpandedCategory(expandedCategory)
            event.target.parentNode.innerHTML += expansion
        } else if(event.target.className === "collapse-category") {
            const collapseButton = event.target
            collapseButton.innerHTML = "Expand"
            collapseButton.className = "expand-category"
            const expansion = collapseButton.nextSibling.nextSibling
            expansion.remove()
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

function renderExpandedCategory(expandedCategory) {
    let pictures = ""
    expandedCategory.recent_pictures.forEach(picture => {
        pictures += `
        <img class="picture" src="${picture.img_url}">
        `
    })
    return `
    <div class="expansion">
        <button class="show-all" data-id=${expandedCategory.id}>Show All Pictures</button>
        ${pictures}
    </div>
    `
}