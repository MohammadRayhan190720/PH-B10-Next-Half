import Dad from "./Dad";
import Uncle from "./Uncle";
import Unty from "./Unty";

const Grandpa = () => {
  return (
    <div className="border">
      <h2 className="border">GrandFather</h2>
      <div className="flex gap-5">
        <Dad></Dad>
        <Uncle></Uncle>
        <Unty></Unty>
      </div>
    </div>
  );
};

export default Grandpa;