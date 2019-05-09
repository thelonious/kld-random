# kld-random

- [Installation](#installation)
- [Usage](#usage)
	- [Uniform Distribution](#uniform-distribution)
	- [Repeatable Uniform Distribution](#repeatable-uniform-distribution)
	- [Uniform Distribution Range](#uniform-distribution-range)
	- [Gaussian Distribution](#gaussian-distribution)
	- [Gaussian Distribution with Average and Variance](#gaussian-distribution-with-average-and-variance)

---

Random number generation suitable for testing only. I mostly use this for prototyping and for unit tests. Don't build an encyption layer with this :)

# Installation

```npm install kld-random```

# Usage

## Uniform Distribution

Generate a uniform distribution between [0, 1)

```javascript
import {uniformGenerator} from "kld-random";

const random = uniformGenerator();

for (let i = 0; i < 10; i++) {
    console.log(random());
}
```

## Repeatable Uniform Distribution

Generate a uniform distribution that will create the same sequence of numbers each time a new generator is created. This is done by providing a seed value when creating the generator.

```javascript
import {uniformGenerator} from "kld-random";

const mySeed = 1337;
const random = uniformGenerator(mySeed);

for (let i = 0; i < 10; i++) {
    console.log(random());
}
```

## Uniform Distribution Range

Generate a uniform distribution within a range of values. Note that you can provide an optional seed value as the last argument when creating the generator.

```javascript
import {uniformGeneratorRange} from "kld-random";

const min = 10;
const max = 233;
const random = uniformGenerator(min, max);

for (let i = 0; i < 10; i++) {
    console.log(random());
}
```

## Gaussian Distribution

Generate a gaussian distrubution. Note that you can provide an optional seed value as the last argument when creating the generator.

```javascript
import {gaussianGenerator} from "kld-random";

const random = gaussianGenerator();

for (let i = 0; i < 10; i++) {
    console.log(random());
}
```

## Gaussian Distribution with Average and Variance

Generate a gaussian distrubution with a specified average and variance. Note that you can provide an optional seed value as the last argument when creating the generator.

```javascript
import {gaussianGeneratorRange} from "kld-random";

const average = 133;
const variance = 13;
const random = gaussianGeneratorRange(average, variance);

for (let i = 0; i < 10; i++) {
    console.log(random());
}
```
