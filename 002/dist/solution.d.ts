declare module "src/elements" {
    export const elements: {
        name: string;
        symbol: string;
    }[];
}
interface Solution {
    [name: string]: number;
}
interface Composition {
    symbol: string;
    name: string;
    count: number;
}
declare module "src/getComposition" {
    export const getComposition: (formula: string) => object;
}
declare module "src/solution" { }
