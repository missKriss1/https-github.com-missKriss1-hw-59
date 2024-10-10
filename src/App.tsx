import BlockFilm from "./container/BlockFilm/BlockFilm.tsx";
import JokeBlock from "./container/JokeBlock/JokeBlock.tsx";
import { useState } from 'react';

const App = () => {
  const [page, setPage] = useState<boolean>(false);

  return (
    <>
      <div className="container mt-4">
        <button className="btn btn-primary" onClick={() => setPage((!page))}>Change ex</button>
        {page ? <JokeBlock/>  :   <BlockFilm/>}
      </div>
    </>
  );
};

export default App;
