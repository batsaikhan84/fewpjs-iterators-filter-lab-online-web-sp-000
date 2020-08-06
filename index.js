function findMatching(drivers, name) {
  return drivers.filter(e => e.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter(e => e[0].toLowerCase() == letter.toLowerCase())
}

function matchName(drivers, letter) {
  return drivers.filter(e => e.name[0] == letter)
}
