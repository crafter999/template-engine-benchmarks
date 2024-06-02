import { readFileSync } from 'fs';
import * as nunjucks from 'nunjucks';

const getFullYear = function() {
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
    "currentYear": getFullYear
}

const f = readFileSync("./nunjucks/index.njk", "utf8");

const start = performance.now();
for (let i = 0; i < 1000; i++) {
    // @ts-ignore
    const env = new nunjucks.Environment(new nunjucks.Template(f));
    const output = env.renderString(f, data);
}
const end = performance.now();
console.log(`Rendering took ${end - start} ms`);