import { Edge } from 'edge.js';
import { readFileSync } from 'fs';

function getFullYear() {
    return new Date().getFullYear();
}

const data = {
    "title": "My Blog",
    "menu": [
        { "name": "Home", "url": "/" },
        { "name": "About", "url": "/about" },
        { "name": "Contact", "url": "/contact" }
    ],
    "sectionTitle": "Latest Articles",
    "articles": [
        { "title": "Article 1", "content": "Content of article 1." },
        { "title": "Article 2", "content": "Content of article 2." }
    ],
    "aboutMe": "This is a short bio about me.",
    "links": [
        { "name": "GitHub", "url": "https://github.com" },
        { "name": "Twitter", "url": "https://twitter.com" }
    ]
}

// Instantiate Edge
const edge = Edge.create();

// Register custom helper
edge.global('currentYear', getFullYear());

const f = readFileSync('./edge/index.edge', 'utf8');

// Compile and render the template

const start = performance.now();
for (let i = 0; i < 1000; i++) {
    await edge.renderRaw(f, data);
}
const end = performance.now();
console.log(`Rendering took ${end - start} ms`);
