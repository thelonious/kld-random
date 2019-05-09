import {uniformGenerator, uniformGeneratorRange, toRange, gaussianGenerator, gaussianGeneratorRange} from "../index.js";

describe("Random Number Generator", () => {
    it("Default Uniform Range", () => {
        const random = uniformGenerator();

        for (let i = 0; i < 10; i++) {
            console.log(random());
        }
    });
    it("Uniform: -100 to 100", () => {
        const random = uniformGeneratorRange(-100, 100);

        for (let i = 0; i < 10; i++) {
            console.log(random());
        }
    });
    it("Uniform: -100 to 100", () => {
        const random = toRange(uniformGenerator(), -100, 100);

        for (let i = 0; i < 10; i++) {
            console.log(random());
        }
    });
    it("Default Gaussian Range", () => {
        const random = gaussianGenerator();

        for (let i = 0; i < 10; i++) {
            console.log(random());
        }
    });
    it("Gaussian: 100 avg, 10 variance", () => {
        const random = gaussianGeneratorRange(100, 10);

        for (let i = 0; i < 10; i++) {
            console.log(random());
        }
    });
    it("Gaussian: 100 avg, 10 variance", () => {
        const random = toRange(gaussianGenerator(), 100 - 10, 100 + 10);

        for (let i = 0; i < 10; i++) {
            console.log(random());
        }
    });
});
