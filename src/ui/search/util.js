
/**
 * Returns true if the character exists in the item or if the
 * character is blank.
 */
function matchTerm (item, char) {
  if (!char) return true // Treat empty string as a wildcard
  return (
    item.name.toLowerCase().indexOf(char.toLowerCase()) !== -1
  )
}

export {matchTerm}
