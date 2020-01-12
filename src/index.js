export default function forEachain(callback, thisArg) {
    this.forEach(callback, thisArg);
    return this;
};
