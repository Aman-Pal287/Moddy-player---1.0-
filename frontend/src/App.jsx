import { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/Moodsongs";

const App = () => {
  const [Songs, setSongs] = useState([]);
  return (
    <div className="bg-black w-full h-[100vh]">
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </div>
  );
};

export default App;
