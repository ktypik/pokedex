function NavBar({ setPokemonIndex, pokemonList, pokemonIndex }) {
  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handlePreviousClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={handlePreviousClick}>Précedent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNextClick}>Suivant</button>
      )}
    </div>
  );
}
export default NavBar;
