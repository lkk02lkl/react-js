/* import Message from "./Message"; 
import ListGroup from "./components/List.Group";
import Alert from "./components/Alert"*/
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";


function App() {
 /*  let items = ["New York", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
     {  <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/> }
  } */
  const [alertVisible, setAlertVisibility] = useState(false);

  return( 
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button  onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;