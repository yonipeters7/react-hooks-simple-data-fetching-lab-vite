import { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch dog image from API
  const fetchDogImage = () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
      });
  };

  // load dog image when component first mounts
  useEffect(() => {
    fetchDogImage();
  }, []);

  // button click handler
  const handleClick = () => {
    fetchDogImage();
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="A Random Dog" />
          <button onClick={handleClick}>Load New Dog</button>
        </div>
      )}
    </div>
  );
}

export default App;
