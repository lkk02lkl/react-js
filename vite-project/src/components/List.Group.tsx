/* import { Fragment } from "react";
import { MouseEvent } from "react";*/
import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}


function ListGroup({ items, heading, onSelectItem }: Props) {
  
  /* let selectedIndex = 0; */
  const [selectedIndex, setSelectedIndex] = useState(-1);



  /*
  items = [];

   const message = items.length === 0 ? <p>No item found</p> : null; 

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  }

   if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );
  const handleClick = (event: MouseEvent) => console.log(event); */

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => { 
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
