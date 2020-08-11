import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group container">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type a word for definitions and gifs"
          id="search"
        />

        <button onClick={props.handleFormSubmit} className="btn btn-info mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
