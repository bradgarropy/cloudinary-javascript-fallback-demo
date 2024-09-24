import "~/src/style.css"

import {Cloudinary} from "@cloudinary/url-gen"
import {defaultImage} from "@cloudinary/url-gen/actions/delivery"
import {scale} from "@cloudinary/url-gen/actions/resize"

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: "bradgarropy",
    },
})

const a = cloudinary
    .image("cloudinary-javascript-fallback-demo/a")
    .format("auto")
    .quality("auto")
    .resize(scale().width(410))
    .toURL()

const b = cloudinary
    .image("cloudinary-javascript-fallback-demo/b")
    .format("auto")
    .quality("auto")
    .resize(scale().width(410))
    .toURL()

// STEP 1
// const c = cloudinary
//     .image("cloudinary-javascript-fallback-demo/c")
//     .format("auto")
//     .quality("auto")
//     .resize(scale().width(410))
//     .delivery(defaultImage("cloudinary-javascript-fallback-demo:sea.jpg"))
//     .toURL()

// STEP 2
const cBroken = cloudinary
    .image("cloudinary-javascript-fallback-demo/cBroken")
    .format("auto")
    .quality("auto")
    .resize(scale().width(410))
    .delivery(defaultImage("cloudinary-javascript-fallback-demo:sea.jpg"))
    .toURL()

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="letters">
      <img src="${a}" />
      <img src="${b}" />
      <img src="${cBroken}" />
    </div>
`
