import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const getCat = () => {
      axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then(res => {
          setUrl(res.data[0].url);
        })
        .catch(err => {
          console.log(err);
        });

      return url;
    };
    getCat();
  }, []);

  return (
    <>
      <h1>Cat</h1>
      {url && <img className='cat' src={url} alt='cat image'></img>}
    </>
  );
}

export default App;
