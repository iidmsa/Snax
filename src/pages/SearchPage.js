import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import response from "../response";
import { Avatar, Link } from "@material-ui/core";
import Search from "../components/Search";

function SearchPage(props) {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  //   const data = response;
  console.log("DEBUG", data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/"></Link>

        <p href="/n" className="searchPage__logo">
          SNAX
        </p>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
        <Avatar className="searchPage__avatar" />
      </div>

      {term && (
        <div className="searchPage__results">
          <div className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            &nbsp;seconds) for {term}
          </div>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultTitle" href={item.link}>
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                {" "}
                <h2>{item.title}</h2>{" "}
              </a>
              <br />
              <a className="searchPage__resultSnippet">{item.snippet}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
