import FacialExpression from "./components/FacialExpression";
import Moodsongs from "./components/Moodsongs";

const App = () => {
  return (
    <div className="bg-black w-full h-[100vh]">
      <FacialExpression />
      <Moodsongs />
    </div>
  );
};

export default App;
