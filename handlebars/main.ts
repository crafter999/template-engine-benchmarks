import { readFileSync } from "fs";
import Handlebars from "handlebars";

// Load data
const data = {
    title: "My Blog",
    menu: [
        {name: "Home", url: "/"},
        {name: "About", url: "/about"},
        {name: "Contact", url: "/contact"}
    ],
    sectionTitle: "Latest Articles",
    articles: [
        {title: "Article 1", content: "Content of article 1."},
        {title: "Article 2", content: "Content of article 2."}
    ],
    aboutMe: "This is a short bio about me.",
    links: [
        {name: "GitHub", url: "https://github.com"},
        {name: "Twitter", url: "https://twitter.com"}
    ]
};

// Register the helper
Handlebars.registerHelper('currentYear', function() {
    return new Date().getFullYear();
});

// Register the partial
const p = readFileSync("./handlebars/partial.hbs").toString()
Handlebars.registerPartial("sidebar",p)

// index
const f = readFileSync("./handlebars/index.hbs").toString()

const start = performance.now();
for (let i = 0; i < 1000; i++) {
    const template = Handlebars.compile(f);
    template(data);
}
const end = performance.now();
console.log(`Rendering took ${end - start} ms`);