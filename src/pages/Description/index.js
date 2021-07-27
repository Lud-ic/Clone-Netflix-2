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

    const [data, setResponse] = useState(undefined);
    
    useEffect(() => { 
        const fetchAsync = async () => { 
            const response = await fetchSingleShow(id); 
            setResponse(response);
        }
        fetchAsync();
    }, [id]);

    return (
        <>
            <DescriptionSection data={data}/>
            <DescriptionSummary data={data}/>
            <DescriptionsComents/>
            <DescriptionFooter/>
            <Footer/>
            
            {data && (
                <div id="description-background" style={{
                    backgroundImage: `url(${data.image.original})`
                }}/>
            )}
        </>
    );
}
export { Description }