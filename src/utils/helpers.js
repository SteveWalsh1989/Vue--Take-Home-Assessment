// capitalise the first letter of a string
// @Param {string} str - the string to capitalise
// @Return {string} - the capitalised string
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Extracts the id from the homeword of person returned from the API
// @Param {string} str - the url of the planet from SwapAPI
// @Return {string} - the id of the planet
export function extractPlanetId(url) {
  const res = url.slice(0, -1);
  const strs = res.split('/');
  const id = strs.at(-1);
  return id;
}

// Format population to be in billions/millions/thousands
// rounds down to the nearest tier
// @Param {number} num - the population of the planet
// @Return {string} - the formatted population
export function formatPopulation(num) {
  if (num > 1000000000) {
    return Math.round(num / 1000000000).toFixed(0) + 'B';
  } else if (num > 1000000) {
    return Math.round(num / 1000000).toFixed(0) + 'M';
  } else {
    return Math.round(num / 1000).toFixed(0) + 'K';
  }
}

// Format the diameter to be in km/miles
// @Param {number} num - the diameter of the planet
// @Return {string} - the formatted diameter
export function formatDiameter(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
