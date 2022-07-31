module.exports = function check(str, bracketsConfig) {
  let stack = []

  const pairs = {}
  bracketsConfig.forEach(pair => (pairs[pair[1]] = pair[0]))

  const openingBrackets = Object.values(pairs)
  const closingBrackets = Object.keys(pairs)

  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i]) && closingBrackets.includes(str[i])) {
      if (pairs[str[i]] === stack[stack.length - 1]) {
        stack.pop()
        continue
      }
      stack.push(str[i])
      continue
    } else if (openingBrackets.includes(str[i])) {
      stack.push(str[i])
      continue
    }

    if (stack.length === 0) return false

    if (pairs[str[i]] === stack[stack.length - 1]) {
      stack.pop()
      continue
    }

    stack.push(str[i])
  }

  return stack.length === 0
}
