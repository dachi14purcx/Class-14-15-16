import Card from "./components/Card"
import { data } from "./components/data"
import { useState } from "react";
import Filter from "./components/Filter";

function App() {
  const [people, setPeople] = useState(data);
  const [searchTerm, setSearchTerm] =useState('')
  const [filterMode, setFilterMode] = useState("all");
  
  const filteredData = people.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (
      filterMode === "all" ||
      (filterMode === "favorites" && item.isFavorite) ||
      (filterMode === "nonFavorites" && !item.isFavorite)
    )
  );

  return (
    <>
      <Filter setFilterMode={setFilterMode}/>
      <input
        type="text"
        placeholder="Search..."
        className=" p-5 text-[20px] font-semibold border-2 rounded-4xl w-[30vw] h-[60px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      { filteredData.length > 0  && (
        filteredData.map(el => (
          <Card key={el.id} setPeople={setPeople} profile={el} />
        ))
      )}
    </>
  )

}

export default App