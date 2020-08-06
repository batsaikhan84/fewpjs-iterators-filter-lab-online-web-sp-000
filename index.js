function findMatching(drivers, name) {
  return drivers.filter(e => e.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(drivers, letter) {
  return driver.filter(e => e[0].toLowerCase() == letter.toLowerCase())
}
