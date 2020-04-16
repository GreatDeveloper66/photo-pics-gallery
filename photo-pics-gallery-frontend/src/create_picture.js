class AddPicture {
    constructor() {
        this.form = document.querySelector("#add-picture-form")
        this.form.style.maxWidth = "700px"
        this.categoriesAttributes = []
        this.newPictureContainer = document.querySelector("#new-picture")
    }

    addFormListener = () => {
        this.form.addEventListener("submit", event => {
            event.preventDefault()
            this.buildPictureObj(event.target)
            this.fetchPostRequest()
                .then(newPicture => {
                    this.categoriesAttributes = []
                    const picture = new Picture(newPicture)
                    picture.container = this.newPictureContainer
                    picture.renderShow()
                    event.target.style.marginBottom = "20px"
                    event.target.reset()
                })
        })
    }

    fetchPostRequest = () => {
        this.buildConfigObj()
        console.log(this.configObj)
        return fetch(PICTURES_URL, this.configObj)
                .then(resp => resp.json())
    }

    buildConfigObj = () => {
        this.configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.pictureObject)
        }
    }

    buildPictureObj = submittedForm => {
        this.buildCategoriesAttributes(submittedForm)
        this.pictureObject = {
            new_picture: {
                creator_id: current_user.id,
                img_url: submittedForm["img-url"].value,
                categories_attributes: this.categoriesAttributes
            }
        }
    }

    buildCategoriesAttributes = submittedForm => {
        const categoryNames = submittedForm["categories-attributes"].value.split(/, */)
        categoryNames.forEach(name => {
            this.categoriesAttributes.push({name: name})
        })
    }

    addClearNewPicturesListener = () => {
        const link = document.querySelector("#add-picture")
        link.addEventListener("click", event => this.newPictureContainer.innerHTML = "")
    }
}




const addPicture = () => {
    const addPictureObj = new AddPicture()
    addPictureObj.addClearNewPicturesListener()
    addPictureObj.addFormListener()
}

addPicture()