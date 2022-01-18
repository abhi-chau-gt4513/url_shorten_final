import URLShortenerForm from './components/URLShortenerForm';
import Background from "./components/Background";
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <URLShortenerForm />,
        <Background />
      </Box>
    </div>
  );
}

export default App;
