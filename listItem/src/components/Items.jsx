import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div>
      <ul>
        <Link to="/items/item1">
          <li>item 1</li>
        </Link>
        <Link to="/items/item2">
          <li>item 2</li>
        </Link>
        <Link to="/items/item3">
          <li>item 3</li>
        </Link>
      </ul>
    </div>
  );
};

export default Items;
