import {Eta} from "eta"
import { readFileSync } from "fs";

function currentYear() {
    return new Date().getFullYear();
}

const data = {
    "title": "My Blog",
    "menu": [
        {"name": "Home", "url": "/"},
        {"name": "About", "url": "/about"},
        {"name": "Contact", "url": "/contact"}
    ],
    "sectionTitle": "Latest Articles",
    "articles": [
        {"title": "Article 1", "content": "Content of article 1."},
        {"title": "Article 2", "content": "Content of article 2."}
    ],
    "aboutMe": "This is a short bio about me.",
    "links": [
        {"name": "GitHub", "url": "https://github.com"},
        {"name": "Twitter", "url": "https://twitter.com"}
    ],
    "currentYear": currentYear
}

const eta = new Eta()

const index = readFileSync("./eta/index.eta").toString()
const partial = readFileSync("./eta/partial.eta").toString()

// register filter
eta.configure({
    views: "./eta"
})

// register partial and load data
eta.templatesSync.define('@partial', eta.compile(partial))

const start = performance.now();
for (let i = 0; i < 1000; i++) {
    const compiled = eta.compile(index)
    eta.render(compiled, data)
}
const end = performance.now();
console.log(`Rendering took ${end - start} ms`);
