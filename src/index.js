import {contains as getCharType} from './charCodeHelper'

/**
 * sort Array<string> in a smart way
 * @param list {Array} array to sort
 * @param caseInsensitive {Boolean} is case insensitive
 */

export function naturalSort(list, caseInsensitive, order = 'DESC') {
	var desc = order.toUpperCase() === 'DESC'

	list.forEach((item, i) => list[i] = splitByCharType(item))

	list.sort((a, b) => sort(a, b, caseInsensitive, desc))

	list.forEach((item, i) => list[i] = item.join(''))

	return list
}

/**
 * convert string to array by its type
 * such as : 'a10b20' to ['a', '10', 'b', '20']
 * @param str {String}
 * @return {Array}
 */
function splitByCharType(str) {
	if (typeof str !== 'string')
		str = String(str)

	if (str === '') return []

	var list = [str[0]]
	var lastCharType = getCharType(str[0])

	for (var i = 1; i < str.length; i += 1) {
		var singleChar = str[i]
		var charType = getCharType(singleChar)

		if (charType === lastCharType) {
			list[list.length - 1] += singleChar
		} else {
			list.push(singleChar)

			lastCharType = charType
		}
	}

	return list
}

/**
 * sort the transformed array
 * @param a {Array}
 * @param b {Array}
 * @param caseInsensitive
 * @param desc
 * @returns {number}
 */
function sort(a, b, caseInsensitive, desc) {
	var len = Math.min(a.length, b.length)
	var factor = desc ? -1 : 1

	for (var i = 0; i < len; i += 1) {
		var [itemA, itemB] = [a[i], b[i]]

		if (!itemA || !itemB) break

		if (caseInsensitive) {
			itemA = itemA.toLowerCase()
			itemB = itemB.toLowerCase()
		}

		if (itemA !== itemB) {
			var [valueA, valueB] = [Number(itemA), Number(itemB)]

			if (valueA == itemA && valueB == itemB) {
				return (valueA - valueB) * factor
			} else {
				return itemA > itemB ? 1 * factor : -1 * factor
			}
		}
	}

	return (a.length - b.length) * factor
}
