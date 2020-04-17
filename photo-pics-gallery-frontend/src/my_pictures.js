class MyPictures {
    constructor(user) {
        this.createPictureObjs(user.pictures)
        this.categories = user.categories
        this.container = document.querySelector("#my-pictures-view")
    }

    createPictureObjs = pictures => {
        this.pictures = []
        pictures.forEach(picture => {
            const picObj = new UserPicture(picture)
            this.pictures.push(picObj)
        })
    }

    render = () => {
        this.container.innerHTML = ""
        this.container.innerHTML += this.renderCategoryForm()
        this.picturesContainer = document.createElement("div")
        this.renderPictures(this.pictures)
        this.container.append(this.picturesContainer)
    }

    renderPictures = pictures => {
        this.picturesContainer.innerHTML = ""
        pictures.forEach(picture => {
            picture.render()
            this.picturesContainer.append(picture.card)
        })
    }

    renderCategoryForm = () => {
        const options = this.renderCategoryOptions()
        return `
        <form class="ui form">
            <div class="eight wide field">
                <h1 class="ui header">Filter Pictures By Category</h1>
                <select id="select-category" class="ui dropdown" name="category">
                    <option value="All">All</option>
                    ${options}
                </select>
            </div>
        </form>
      `
    }

    renderCategoryOptions = () => {
        let options = ""
        this.categories.forEach(category => {
            options += `<option value="${category}">${category}</option>`
        })
        return options
    }

    addDeleteListener = () => {
        this.container.addEventListener("click", event => {
            if(event.target.id === "delete-picture") {
                const url = PICTURES_URL + `/${event.target.dataset.id}`
                const configObj = this.buildDeleteConfig()
                fetch(url, configObj)
                    .then(resp => resp.json())
                    .then(data => {
                        const deletedPicture = this.pictures.find(picture => picture.id === parseInt(event.target.dataset.id))
                        const deletedIndex = this.pictures.indexOf(deletedPicture)
                        this.pictures.splice(deletedIndex, 1)
                        deletedPicture.card.remove()
                    })
            }
        })
    }

    buildDeleteConfig = () => {
        return {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    }

    addFilterListener = () => {
        this.selectInput = document.querySelector("#select-category")
        this.selectInput.addEventListener("input", event => {
            const selectedCategory = event.target.value
            if(selectedCategory === "All") {
                this.renderPictures(this.pictures)
            } else {
                const categoryPictures = this.pictures.filter(picture => {
                    return picture.categories.some(category => category === selectedCategory)
                })
                this.renderPictures(categoryPictures)
            }
        })
    }

}

class UserPicture extends Picture {
    constructor(picture) {
        super(picture)
        this.card = document.createElement("div")
        this.card.style.margin = "20px"
        this.card.style.position = "relative"
        this.card.style.height = "500px"
    }

    render = () => {
        this.card.innerHTML = `
        <img style="position: absolute;" class="my-picture" src="${this.url}"></img>
        <button id="delete-picture" class="ui primary button" style="position: absolute;" data-id=${this.id}>Delete</button>
        `
    }


}


const myPicturesListener = () => {
    const myPictures = document.querySelector("#my-pictures")
    myPictures.addEventListener("click", event => {
        event.preventDefault()
        if(current_user){
            const url = usersURL + `/${current_user.id}`
            // const url = usersURL + `/1`
            fetch(url)
                .then(resp => resp.json())
                .then(user => {
                    const myPicturesObj = new MyPictures(user)
                    myPicturesObj.render()
                    myPicturesObj.addDeleteListener()
                    myPicturesObj.addFilterListener()
                })
        } else {
            document.querySelector("#my-pictures-view").innerHTML = "<h1>Login/Register to view this page</h1>"
        }
    })
}

const myPictures = () => {
    myPicturesListener()
}

myPictures()