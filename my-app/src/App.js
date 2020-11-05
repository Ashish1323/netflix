import Navbar from "./Navbar";
import Row from "./Row";
import requests from "./requests";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Row title="Trending" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Horror" fetchUrl={requests.fetchTrending} />

      
    </div>
  );
}

export default App;
