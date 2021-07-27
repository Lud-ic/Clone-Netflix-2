import { DescriptionsComents } from "../../components/DescriptionComents";
import { DescriptionFooter } from "../../components/DescriptionFooter";
import { DescriptionSection } from "../../components/DescriptionSection";
import { DescriptionSummary } from "../../components/DescriptionSummary";


import "./style.scss"

import { fetchSingleShow } from "../../services";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";

const Description = () => {

    const { id } = useParams();

    const [response, getResponse] = useState(undefined);
    
    useEffect(() => { 
        const fetchAsync = async () => { 
            const data = await fetchSingleShow(id); 
            getResponse(data);
        }
        fetchAsync();
    }, [id]);

    return (
        <>
            <DescriptionSection response={response}/>
            <DescriptionSummary response={response}/>
            <DescriptionsComents/>
            <DescriptionFooter/>
            <Footer/>
            
            {response && (
                <div id="description-background" style={{
                    backgroundImage: `url(${response.image.original})`
                }}/>
            )}
        </>
    );
}
export { Description }