/**
 * Performs the specified action for each element in a sequence, and returns it.
 * 
 * @param {(value: any, index: number, array: any[]) => void} callback
 * A function that accepts up to three arguments. forEach calls the callbackfn
 * function one time for each element in the sequence.
 * 
 * @param {any} [thisArg]
 * An object to which the this keyword can refer in the callbackfn function. If
 * thisArg is omitted, undefined is used as the this value.
 * 
 * @returns the initial sequence
 */
function foreachain(callback, thisArg) {
	this.forEach(callback, thisArg)
	return this
}

export default foreachain
