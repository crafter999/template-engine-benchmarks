# Node.js template engine benchmarks (2024)
Template engines are widely used in JavaScript to render HTML views by inserting dynamic data into templates. The performance of these engines can vary significantly based on the complexity of the template and the data being processed. This repository aims to provide a fair comparison of the performance of popular JavaScript template engines.


# Benchmarking Methodology
Simple performance testing of 1000 iterations of each template engine.

# What tested
- Eta.js 
- Liquid.js
- Handlebars
- Nunjucks
- EJS
- Edge.js


# Results (Lower is better)
| Engine     | Result | Snyk Score |
|------------|--------|------------|
| ETA.ja     | 20ms   |   92/100   |
| EJS        | 68ms   |   94/100   |
| Edge.js    | 118ms  |   74/100   |
| Liquid.js  | 153ms  |   86/100   |
| Nunjucks   | 175ms  |   80/100   |
| Handlebars | 390ms  |   86/100   |

# How to run
```
npm run benchmark
```

# Contributing

Contributions are welcome! If you have suggestions for improvements or want to add more template engines to the benchmark, please open an issue or submit a pull request.