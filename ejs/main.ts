import { readFileSync } from "fs";
import { Options, renderFile, render } from "ejs"

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
    ]
}

const currentYear = function() {
    return new Date().getFullYear();
}

// @ts-ignore
data.currentYear = currentYear;

const f = readFileSync("./ejs/index.ejs", "utf8");


const start = performance.now();
for (let i = 0; i < 1000; i++) {
    render(f, data)
}
const end = performance.now();
console.log(`Rendering took ${end - start} ms`);