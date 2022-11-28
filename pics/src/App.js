import SearchBar from "./components/SearchBar";
function App() {
  const handleSubmit = (term) => {
    console.log(`do search with ${term}`);
  };

  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;
