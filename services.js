async function fetchShows() {
  const response = await fetch("https://api.tvmaze.com/shows");
    const data = await response.json();
    console.log(data);

    const container = document.getElementById('container')

    for (const item of data) {
      const show = document.createElement('p');
      show.innerText = item.name;
      container.appendChild(show)
    }

}

// fetchShows();

async function fetchSingleShow(id) {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${id}`);
    const data = await response.json();
    console.log(data);

    const container = document.getElementById('container')

    for (const item of data) {
      const show = document.createElement('p');
      show.innerText = item.show.name;
      container.appendChild(show)
    }

}

fetchSingleShow('mean')