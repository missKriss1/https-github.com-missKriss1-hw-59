import { BlockFilm } from "../../types";
import React from "react";

interface Props {
  film: BlockFilm;
  delateByInout(id: string): void;
  editingByInput(id: string, newText: string): void;
}

const ItmeFilm: React.FC<Props> = React.memo(
  ({ film, delateByInout, editingByInput }) => {
    const textNew = (e: React.ChangeEvent<HTMLInputElement>) => {
      editingByInput(film.id, e.target.value);
    };
    return (
      <div className="row mb-3">
        <input
          className="input-group col-2 w-25"
          type="text"
          value={film.text}
          onChange={textNew}
        />
        <button
          className="btn-close col-2 ms-3"
          onClick={() => delateByInout(film.id)}
        ></button>
      </div>
    );
  },
  (preProps, nextProps) => {
    return (
      preProps.film.text === nextProps.film.text &&
      nextProps.film.id === nextProps.film.id
    );
  },
);

export default ItmeFilm;
