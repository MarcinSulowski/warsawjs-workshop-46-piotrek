/*
Figure out a way to add constraints and then create a function that checks
the following data structure:

Person {
  firstName: string, not empty
  lastName: string, not empty,
  age: number, integer, >= 0,
}
*/

import { isObjectOf } from './2-objects'
import { isA } from './1-types'

const isAllOf = (...fns) => (value) => fns.every((fn) => fn(value))
const isNotEmpty = (x) => x.length > 0
const isInt = n => Number.isInteger(n)
const isGreaterOrEqual = val => n => n >= val

export const isPerson = isObjectOf({
  firstName: isAllOf(isA('string'), isNotEmpty),
  lastName: isAllOf(isA('string'), isNotEmpty),
  age: isAllOf(isInt, isGreaterOrEqual(0)),
})
