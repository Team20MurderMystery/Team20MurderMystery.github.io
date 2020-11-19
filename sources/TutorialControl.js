document.addEventListener("DOMContentLoaded", () => {
    current = 0
    //Load tutorial pictures
    image = new Array, image[0] = "../imgs/TutorialPics/Tutorial1.jpg", image[1] = "../imgs/TutorialPics/Tutorial2.jpg", image[2] = "../imgs/TutorialPics/Tutorial3.jpg"
    document.querySelector("#image").src = image[current]
    document.querySelector("#pre").addEventListener("click", () => {//Previous picture switch
        if (current == 0) {
            current = 2
        }
        else
            current -= 1
        document.querySelector("#image").src = image[current]
    })
    document.querySelector("#next").addEventListener("click", () => {//Next picture switch
        if (current == 2) {
            current = 0
        }
        else
            current += 1
        document.querySelector("#image").src = image[current]
    })
})
