import { useEffect, useState } from 'react';
import JokeItem from '../../components /JokeItem/JokeItem.tsx';

const JokeBlock = () => {
  const [joke, setJoke] = useState<string>('')

  const url = 'https://api.chucknorris.io/jokes/random';
  const fetchurl = async ()=>{
    const response = await fetch(url);
    if(response.ok){
      const posts = await response.json() ;
      setJoke(posts.value);
    }
  };

  useEffect(() =>{
    void fetchurl()
  }, [])

  return (
    <div className="container">
      <h2>Jokes</h2>
      <JokeItem text={joke} />
      <button className="btn btn-primary" onClick={fetchurl}>Get new jokes</button>
    </div>
  );
};

export default JokeBlock;