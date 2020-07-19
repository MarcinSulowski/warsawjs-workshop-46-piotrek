/*
Write the following functions:

isArrayOf
isAnyOf
isExactly

Examples

const isStringArray = isArrayOf(isA('string'))
isStringArray(['a', 'b']) // true
isStringArray([1, 'c']) // false

const isStringOrNumber = isAnyOf(isA('string'), isA('number'))
isStringOrNumber('a') // true
isStringOrNumber(1) // true
isStringOrNumber(null) // false

const is4 = isExactly(4)
is4(4) // true
is4(3) // false
*/

export const isArrayOf = (fn) => (val) => Array.isArray(val) && val.every(fn)

export const isAnyOf = (...fns) => (val) => fns.some((f) => f(val))

export const isExactly = x => val => val === x
