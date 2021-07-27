import "./style.scss";

import { useEffect } from "react";

const Poster = ({ data }) => {

    const DATA_SIZE_ARRAY = 240;
    const random = data[Math.floor(Math.random() * DATA_SIZE_ARRAY)]

    const genresDetails = random.genres;
 
    useEffect(() => { 
        const awaitHome = async () => { 
            const homeElement = document.querySelector("#home");
            homeElement.style.backgroundImage = `url(${random.image.medium})`;
            return 1;
        }
        awaitHome();
    }, [random])

    return (
        <>
            {genresDetails && (
              <div id="poster">
                <ul>
                  <li>
                     <p>{genresDetails?.join(" • ")}</p> 
                  </li>
                </ul>
              </div>
            )}
        </>
    );
}

export { Poster };
