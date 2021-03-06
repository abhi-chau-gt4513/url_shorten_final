import URLShortenerForm from '../components/URLShortenerForm';
import { Box } from '@chakra-ui/react';

import coral_reef from "../assets/coral_reef.jpg";
import ecosystem from "../assets/ecosystem.jpg";
import lava from "../assets/lava.jpg";
import public_school from "../assets/public_school.jpg";
import volcano from "../assets/volcano.jpg";


function Home() {
    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <div className='column' style={{width: "100%"}}>
            <div className="row">
                <div className="column">
                <img src={coral_reef} alt='coral reef' style={{height: "500px", width: "100%"}}/>
                </div>
                <div className="column">
                <img src={ecosystem} alt='ecosystem' style={{height: "500px", width: "100%"}}/>
                </div>
                <div className="column">
                <img src={public_school} alt='public school' style={{height: "500px", width: "100%"}}/>
                </div>
            </div>

            <div className='row' style={{width: "100%"}}>
                <div className="column" style={{width: "100%"}}>
                <URLShortenerForm />
                </div>
            </div>

            <div className='row' style={{width: "100%"}}>
                <div className="column2">
                <img src={volcano} alt='volcano' style={{height: "500px", width: "100%"}}/>
                </div>
                <div className="column2">
                <img src={lava} alt='ecosystem' style={{height: "500px", width: "100%"}}/>
                </div>
            </div>
            </div>
        </Box>
    );
}

export default Home;