class AddPicture {
    constructor() {
        this.form = document.querySelector("#add-picture-form")
    }

}




const addPicture = () => {
    const addPictureObj = new AddPicture()
    addPictureObj.addPictureListener()
}

addPicture()