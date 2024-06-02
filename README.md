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
| Engine     | Result |
|------------|--------|
| ETA.ja     | 20ms   |
| EJS        | 68ms   |
| Edge.js    | 118ms  |
| Liquid.j   | 153ms  |
| Nunjuck    | 175ms  |
| Handlebars | 390ms  |

# How to run
```
npm run benchmark
```

# Contributing

Contributions are welcome! If you have suggestions for improvements or want to add more template engines to the benchmark, please open an issue or submit a pull request.