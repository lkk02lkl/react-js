/* import Message from "./Message"; */
import ListGroup from "./components/List.Group";


function App() {
  let items = ["New York", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return( 
    <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;