/**
 *  Create a random number generator. Values will be in the half-open interval
 *  [0, 1)
 *  @param {number} [seed]
 *  @returns {function(): number}
 */
export function uniformGenerator(seed) {
    /* eslint-disable-next-line compat/compat */
    seed = seed || Date.now();

    return () => {
        seed = Math.sin(seed) * 10000;
        return seed - Math.floor(seed);
    };
}

/**
 *  Create a random number generator. Values will be in the half-open interval
 *  [min, max)
 *  @param {number} min
 *  @param {number} max
 *  @param {number} [seed]
 *  @returns {function(): number}
 */
export function uniformGeneratorRange(min, max, seed) {
    return toRange(uniformGenerator(seed), min, max);
}

/**
 *  Return a Gaussian distrubuted random number
 *  @param {number} [seed]
 *  @returns {function(): number}
 */
export function gaussianGenerator(seed) {
    return toGaussian(uniformGenerator(seed));
}

/**
 *  Return a Gaussian distributed random number with the specified average and
 *  variance applied
 *  @param {number} average
 *  @param {number} variance
 *  @param {number} [seed]
 *  @returns {function(): number}
 */
export function gaussianGeneratorRange(average, variance, seed) {
    const min = average - variance;
    const max = average + variance;

    return toRange(gaussianGenerator(seed), min, max);
}

/**
 *  Scale random to a specified range. This will return values in the half-open
 *  interval [min, max)
 *
 *  @param {function(): number} random
 *  @param {number} min
 *  @param {number} max
 *  @returns {function(): number}
 */
export function toRange(random, min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }

    const range = max - min;

    return () => random() * range + min;
}

/**
 *  Return a Gaussian distrubuted random number
 *  @param {function(): number} random
 *  @returns {function(): number}
 */
export function toGaussian(random) {
    return () => {
        let v1, v2, s;

        while (true) {
            v1 = 2 * random() - 1;
            v2 = 2 * random() - 1;
            s = v1 * v1 + v2 * v2;

            if (s !== 0 && s < 1) {
                break;
            }
        }

        s = Math.sqrt((-2 * Math.log(s)) / s);

        return v1 * s;
    };
}
