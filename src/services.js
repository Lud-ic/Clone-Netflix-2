async function fetchShows() {
  const response = await fetch("https://api.tvmaze.com/shows");
  const data = await response.json();
  return data;
}

async function fetchSingleShow(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  return data;
}

export { fetchShows, fetchSingleShow }