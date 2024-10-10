import React, { useState } from "react";
import type { BlockFilm } from "../../types";
import ItemFilm from "../../components /ItemFilm/ItemFilm.tsx";

const BlockFilm = () => {
  const [posts, setPosts] = useState<BlockFilm[]>([]);
  const [inputPosts, setInputPosts] = useState("");

  const addNewPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPosts.trim().length > 0) {
      const newPosts = {
        id: Date.now().toString(),
        text: inputPosts,
      };
      setPosts((prevState) => [...prevState, newPosts]);
      setInputPosts("");
    }
  };

  const editingByInput = (id: string, newText: string) => {
    setPosts((prevState) => {
      return prevState.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            text: newText,
          };
        }
        return post;
      });
    });
  };

  const delateByInout = (id: string) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div className="container mt-4">
      <form onSubmit={addNewPost}>
        <div className="row mb-4">
          <input
            className="input-group w-25 col-2"
            type="text"
            value={inputPosts}
            onChange={(e) => setInputPosts(e.target.value)}
          />
          <button
            className="btn btn-primary col-2 w-auto ms-3"
            type="submit">
            Add
          </button>
        </div>
      </form>
      <h3 >To watch list</h3>
      {posts.length === 0 ? (
        <p>There are no movies.</p>
      ) : (
        <>
          {posts.map((post) => (
            <ItemFilm
              key={post.id}
              film={post}
              delateByInout={delateByInout}
              editingByInput={editingByInput}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default BlockFilm;
