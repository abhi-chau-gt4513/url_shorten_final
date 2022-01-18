import { Input, Button, Box, Heading, InputGroup } from "@chakra-ui/react";
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

        const result = await axios.post(`${SERVER_ENDPOINTS}/api/url`,{
            destination,
        })
        .then((resp) => resp.data);

        setShortUrl(result);

        debugger;

        // console.log(result);
    }

    return <Box pos="relative">

        <form onSubmit={handleSubmit}>
            {/* destination: {destination} */}
            <Input 
                onChange={(e: any) => setDestination(e.target.value)}
                placeholder="https://example.com"
            />,
            <Button type="submit">
                CREATE SHORT URL
            </Button>
        </form>,
        {/* {JSON.stringify(shortUrl)} */}
        {shortUrl && (
            <a href={`${SERVER_ENDPOINTS}/${shortUrl?.shortId}`}>
                CLICK ME
            </a>
        )}
    </Box>
}

export default URLShortenerForm;