import { Input, Button, Box, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import {SERVER_ENDPOINTS} from "../config";

function URLShortenerForm() {
    const [destination, setDestination] = useState();

    const [shortUrl, setShortUrl] = useState<{
        shortId: string
    } | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setShortUrl(null);

        // const result = null;
        try {
            const result = await axios.post(`${SERVER_ENDPOINTS}/api/url`,{
                destination
            })
            .then((resp) => resp.data);

            setShortUrl(result);

            debugger;
        } catch (error) {
            alert("Invalid input. Please try again!");
            
        }
        // const result = await axios.post(`${SERVER_ENDPOINTS}/api/url`,{
            //     destination
            // })
            // .then((resp) => resp.data);
            
        // setShortUrl(result);

        // debugger;
        // console.log(result);
        // console.log(shortUrl?.shortId);
        // console.log(SERVER_ENDPOINTS);
    }

    return <Box pos="relative" zIndex="2" backgroundColor="yellow.700" padding="4" textColor={"white"} textAlign={"center"}>
        
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <Input 
                    onChange={(e: any) => setDestination(e.target.value)}
                    placeholder="Please enter url (i.e. https://www.google.com)"
                    textDecorationLine={'none'}
                />
                <Button type="submit" textColor={"black"}>
                    SHORTEN
                    
                </Button>
            </InputGroup>
        </form>
        <Box textDecorationLine={'underline'}>
            {shortUrl && (
                <a href={`${SERVER_ENDPOINTS}/${shortUrl?.shortId}`}>
                    {window.location.origin}/{shortUrl?.shortId}
                </a>

            )}
        </Box>
        
    </Box>
}

export default URLShortenerForm;