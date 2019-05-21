var harvest = (repeatCouter, result) => {
	// harvest if result longest then prev result
	var _result = ""
	for (key in repeatCouter) { _result += key }
	return _result.length > result.length ? _result : result
}

var findLogestString = (s) => {
	var result = ""
	var repeatCouter = {}

	var start = 0, end = s.length
	for (var i = start; i < end; ) {
		var curr = s.charAt(i)
		if (repeatCouter.hasOwnProperty(curr)) {
			// harvest the result and reset repeatCouter
			result = harvest(repeatCouter, result)
			repeatCouter = {}
		}

		// keep growing
		repeatCouter[curr] = 'x'

		i++
	}

	result = harvest(repeatCouter, result)

	return result
}

var lengthOfLongestSubstring = function(s) {
	
	var result = findLogestString(s)
	var reverseS = s.split("").reverse().join("")
	var resultReverse = findLogestString(reverseS)
	// console.log(result)
	// console.log(resultReverse)
	return result.length > resultReverse.length ? result.length : resultReverse.length
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring(" "))
// console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("asjrgapa"))
