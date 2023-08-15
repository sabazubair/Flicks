import React from "react";

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-5">
      <h1>Welcome to Flicks. Please sign in to search and nominate movies.</h1>
      <p>
        Create a webpage that can search OMDB for movies, and allow the user to
        save their favorite films they feel should be up for nomination. When
        they've selected 5 nominees they should be notified they're finished.
      </p>
      <p>Requirements</p>
      <ul>
        <li>
          The ability to search the OMDB API and return a list of movies that
          show at least the title, release year, and a button to nominate them.
        </li>
        <li>Search results should only be of movies.</li>
        <li>Updates to the search terms should update the result list.</li>
        <li>onChange instead of a submit</li>
        <li>
          If a movie has been nominated already, it's button should be disabled
          within in search results.
        </li>
        <li>Nominated movies should move to their own "Nomination List".</li>
        <li>Movies in the nomination list should be able to be removed.</li>
        <li>Display a banner when the user has 5 nominations.</li>
      </ul>
    </div>
  );
}

export default Home;
