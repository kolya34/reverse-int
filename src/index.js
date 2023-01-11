module.exports = function reverse (n) {
    let abs = Math.abs(n)
    let result = abs.toString().split('')
    const result1 = result.pop()
    const result2 = result.shift()
    let final_result = result1 + Number(result).toString() + result2
    return Number(final_result)
}