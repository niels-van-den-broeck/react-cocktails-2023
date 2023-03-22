function App() {
  return (
    <div className="App">
      <header>
        <span>CocktailApi</span>
      </header>
      <main>
        <section>
          <img src="/banner-image.jpg" alt="Cocktail banner" />
        </section>
        <section>
          <h1>Cocktails in React</h1>
          <label htmlFor="type">
            Search by:
            <select id="type" name="type">
              <option>Name</option>
              <option>Ingredient</option>
            </select>
          </label>
          <label htmlFor="search">
            SearchTerm:
            <input id="search" name="search" type="text" />
          </label>
          <button type="submit" name="submit">
            I'm feeling thirsty!
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
