import React from 'react';

import './App.css';

import Row from './Row';
import Banner from './Banner'
import Nav from './Nav'
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/*Nav Bar*/}
      <Nav />

      {/*Banner*/}
      <Banner />

      <Row title="Netflix Originals" 
      fetchURL={requests.fetchNetflixOriginal}
      isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovie}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovie}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovie}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
