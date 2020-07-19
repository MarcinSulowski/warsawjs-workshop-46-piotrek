const R = require('ramda')
/**
 * Write the same function from exercise 1, but this time use Ramda.
 */

const shorterThan = (val) => (elem) => elem < val

export const getShortNamedAnimals = R.filter(
  R.compose(R.lt(R.__, 5), R.prop('length'), R.prop('name'))
)
