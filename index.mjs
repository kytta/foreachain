export default function (callback, thisArg) {
	this.forEach(callback, thisArg)
	return this
}
