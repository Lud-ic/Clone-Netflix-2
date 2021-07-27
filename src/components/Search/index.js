import { fetchShows } from "../../services";

import { useEffect, useState } from "react";

import "./style.scss";

import { SearchResult } from "../SearchResult";

const Search = () => {

    var inputValue = undefined;

    const [response, getResponse] = useState(undefined);
    
    useEffect(() => { 
        const fetchAsync = async () => { 
            const data = await fetchShows(); 
            getResponse(data);
        }
        fetchAsync();
    }, [inputValue])
 
    return (
        <>
            {response && (
                <div id="search">
                    <div id="search-top">
                        <div id="search-top-left" style={{
                            backgroundImage: `url(${"../../assets/search/back-to-home.svg"})`
                        }} onClick={() => {
                            document.querySelector("#KeepWhatchingBody").style.display = "block";
                            document.querySelector("#trending").style.display = "block";
                            document.querySelector("#search").style.display = "none";
                        }}>
                        </div>
                        <div id="search-top-right" style={{
                            backgroundImage: `url(${"../../assets/search/user-profile.png"})`
                        }}></div>
                    </div>

                    <div id="search-search">

                        <div id="search-search-top-left" style={{
                            backgroundImage: `url(${"../../assets/search/search.png"})`
                        }}>
                        </div>
                        <div id="search-search-top-right" style={{
                            backgroundImage: `url(${"../../assets/search/microphone.svg"})`
                        }}></div>

                        <input onChange={() => {

                            const inputElement = document.querySelector("#search-search input");
                            
                            inputValue = inputElement.value;

                            console.log(inputValue);
                        }} 
                            placeholder="Busque por série, filme, gênero,..."/>
                    </div>

                    <h4>Principais Buscas</h4>

                    <SearchResult 
                        // key="SearchResult1"
                        name={"Esse é o nome do filme procurado"}
                        image={""}
                        data={""}
                    />                   
                </div>
            )}
        </>
    );
};
export { Search };
