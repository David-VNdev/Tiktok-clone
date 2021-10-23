import { useState } from "react";
import Content from "./Content.jsx";
function App() {
  

  const [show,setShow] = useState(true);
  return (
    <div style={{ padding: 32 }}>
      <button onClick = {() => {setShow(!show)}} >Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
