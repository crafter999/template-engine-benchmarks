import { Liquid } from 'liquidjs';
import { readFileSync } from "fs";

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

// Create an engine instance
const engine = new Liquid({
    cache: false
});

// Register the custom filter
function currentYear() {
    return new Date().getFullYear();
}
engine.registerFilter('currentYear', currentYear);

const template = readFileSync('./liquid/index.liquid', 'utf8');

const start = performance.now();
for (let i = 0; i < 1000; i++) {
    const compiledTemplate = engine.parse(template);
    engine.renderSync(compiledTemplate, data);
}
const end = performance.now();
console.log(`Rendering took ${end - start} ms`);