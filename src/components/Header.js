import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateParagraph, updateIncludeHTML } from "../store/storeSlice";

function Header() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.paragraph.count);
  const include = useSelector((state) => state.paragraph.includeHTML);

  const [countp, setCountp] = useState(count);

  const handleCount = (e) => {
    setCountp(e);
    dispatch(updateParagraph(e));
  };

  const handleSelectChange = (e) => {
    if (e === "NO") {
      dispatch(updateIncludeHTML("text"));
    } else {
      dispatch(updateIncludeHTML("html"));
    }
  };

  useEffect(() => {
    console.log(count);
    console.log(include);
  }, [include, count]);

  return (
    <div>
      <h1>React Text Generator App</h1>
      <hr />
      <div className="header">
        <div className="paragraph">
          <label>Paragraphs</label>
          <div>
            <input
              value={countp}
              onChange={(e) => handleCount(e.target.value)}
              min="1"
              type="number"
            />
          </div>
        </div>
        <div className="include">
          <label>Include HTML</label>
          <br />
          <select onChange={(e) => handleSelectChange(e.target.value)}>
            <option>NO</option>
            <option>YES</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
