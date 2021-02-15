import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();

  const [state, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();
    setInput("");
    history.push("/search");

    dispatch({
      type: actionTypes.SET_TERM,
      term: input,
    });
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            SNAX Search
          </Button>
          <Button variant="outlined">I'm Feeling lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__button"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            SNAX Search
          </Button>
          <Button className="search__button" variant="outlined">
            I'm Feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
