

const colors = [ 'volcano', 'gold', 'lime', 'green', 'blue', 'purple' ]
export const randomColor = colors.map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)[0]