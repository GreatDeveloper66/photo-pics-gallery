class MyPictures {
    constructor(user) {
        this.createPictureObjs(user.pictures)
        this.container = document.querySelector("my-pictures-view")
    }

    createPictureObjs = pictures => {
        this.pictures = []
        pictures.forEach(picture => {
            const picObj = new UserPicture(picture)
            this.pictures.push(picObj)
        })
    }

}

class UserPicture extends Picture {
    constructor(picture) {
        super(picture)
    }


}


const myPicturesListener = () => {
    const myPictures = document.querySelector("#my-pictures")
    myPictures.addEventListener("click", event => {
        event.preventDefault()
        console.log(event)
        const url = usersURL + `/${current_user.id}`
        fetch(url)
            .then(resp => resp.json())
            .then(user => console.log(user))
    })
}

const myPictures = () => {
    myPicturesListener()
}

myPictures()