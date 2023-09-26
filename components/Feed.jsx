'use client';

import { useEffect, useState } from "react";

import PromptCard from "./PromptCard";

const Feed = () => {

  const [searchText, setSearchText] = useState('');

  const hendleSearchChange = () => {

  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or an username"
          value={ searchText }
          onChange={ hendleSearchChange }
          required
          className="search_input peer"
        />
      </form>
    </section>
  );
};

export default Feed;