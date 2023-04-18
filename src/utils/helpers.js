// capitalise the first letter of a string
// @Param {string} str - the string to capitalise
// @Return {string} - the capitalised string
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Extracts the id from the homeworld of person returned from the API
// @Param {string} str - the url of the planet from SwapAPI
// @Return {string} - the id of the planet
export function extractPlanetId(url) {
  const res = url.slice(0, -1);
  const strs = res.split('/');
  const id = strs.at(-1);
  return id;
}

// Format number to be in billions/millions/thousands
// rounds down to the nearest tier
// @Param {number} num - the number to format
// @Return {string} - the formatted string
export function formatNumberShorthand(num) {
  const trillion = 1000000000000;
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;
  if (num >= trillion) {
    return Math.round(num / trillion).toFixed(0) + 'T';
  } else if (num >= billion) {
    return Math.round(num / billion).toFixed(0) + 'B';
  } else if (num >= million) {
    return Math.round(num / million).toFixed(0) + 'M';
  } else {
    return Math.round(num / thousand).toFixed(0) + 'K';
  }
}

// Format a number to be comma separated by thousands
// @Param {number} num - the number to be formatted
// @Return {string} - the final formatted number as a string
export function formatNumberThousands(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
