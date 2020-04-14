const DOMAIN = "http://localhost:3000"
const CATEGORIES_URL = `${DOMAIN}/categories`

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
                let categoryLis = ""
                categories.forEach(category => {
                    categoryLis += `
                    <li>${category.name} <button class="expand-category" data-id=${category.id}>Expand</button></li>
                    `
                })
                const categoriesList = `<ul>${categoryLis}</ul>`
                const categoriesDiv = document.createElement("div")
                categoriesDiv.innerHTML = categoriesList
                const view = document.querySelector("#view")
                view.append(categoriesDiv)
                categoriesDiv.addEventListener("click", event => {
                    if(event.target.className === "expand-category") {
                        const expandButton = event.target
                        expandButton.innerHTML = "Collapse"
                        expandButton.className = "collapse-category"
                        const expandedCategoryId = parseInt(event.target.dataset.id)
                        const expandedCategory = categories.find(category => category.id === expandedCategoryId)
                        let pictureLis = ""
                        expandedCategory.recent_pictures.forEach(picture => {
                            pictureLis += `
                            <li><img src="${picture.img_url}"></li>
                            `
                        })
                        const expansion = `
                        <div class="expansion">
                            <button class="show-all" data-id=${expandedCategory.id}>Show All Pictures</button>
                            <ul>${pictureLis}</ul>
                        </div>
                        `
                        event.target.parentNode.innerHTML += expansion
                    } else if(event.target.className === "collapse-category") {
                        const collapseButton = event.target
                        collapseButton.innerHTML = "Expand"
                        collapseButton.className = "expand-category"
                        const expansion = collapseButton.nextSibling.nextSibling
                        expansion.remove()
                    } else if(event.target.className === "show-all") {
                        console.log(event.target)
                    }
                })
            })
    })
}