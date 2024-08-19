
import axios from 'axios'

const randomFossilBtn = document.getElementById("get-random-fossil")

randomFossilBtn.addEventListener("click", async () => {
    const response = await axios.get('/random-fossil.json')

    console.log(response.data.img)

    const imgDiv = document.querySelector("#img-div")
    // imgDiv.setAttribute(src, response.data.img)

    imgDiv.src = response.data.src
})

                