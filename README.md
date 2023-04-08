## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Generate Apache JMeter results

Open your terminal and run the following command

```bash
jmeter -n -t <path to your app>/load-test/demo.jmx -l <path to your app>/load-test/results/demo_results.jtl -e -o <path to your app>/load-test/results/demo_results_temp
```

Explanation documented in this [blog](https://medium.com/@debabrata100/next-js-how-to-automate-performance-testing-using-apache-jmeter-and-bash-scripting-98d41d497172)
