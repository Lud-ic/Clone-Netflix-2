import './style.scss';
import { fetchShows } from "../../services";
import { useEffect, useState } from "react";

const Trending = () => {

  const [response, getResponse] = useState([]);

  useEffect(() => {
    const fetchAsync = async () => {
      const data = await fetchShows();
      getResponse(data);
    }
    fetchAsync();
  }, [])
  
  return (
    <div id="trending">
      <div className="trending-text">
        <p>Em alta</p>
      </div>
      <div id="trending-posters">
        {response.map(({image}) => (
        <img src={image.medium} alt="posters"/>
         
        ))}

      </div>
    </div>

  )

}

export { Trending }