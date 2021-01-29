module.exports = function unit (value) {

  var len = value.length
  if (!value || !len)
    return null
		
  var i = len
  while (i--)
    if (!isNaN(value[i]))
      return value.slice(i + 1, len) || null

  return null
}
