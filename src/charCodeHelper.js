const CHAR_CODE_ZERO = '0'.charCodeAt(0)

const CHAR_CODE_NINE = '9'.charCodeAt(0)

const CHAR_CODE_POINT = '.'.charCodeAt(0)

/**
 * check if the char is [.0-9]
 * @param char {String}
 * @returns {boolean}
 */
function contains(char) {
	var code = char && char.charCodeAt(0)

	return code === CHAR_CODE_POINT || (code >= CHAR_CODE_ZERO && code <= CHAR_CODE_NINE)
}

export {contains}
