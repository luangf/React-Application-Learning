import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <br/>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello <span>World</span></Alert>}

      <Button color="primary" onClick={() => setAlertVisibility(true)}>Test</Button>
    </div>
  );
}

export default App;