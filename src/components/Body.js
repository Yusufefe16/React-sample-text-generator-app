import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParagraph } from "../store/storeSlice";
function Body() {
  const dispatch = useDispatch();
  const { quotes, count, includeHTML, loading, error } = useSelector(
    (state) => state.paragraph
  );

  useEffect(() => {
    dispatch(getParagraph({ count, includeHTML }));
  }, [count, includeHTML]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error !== "") return <div>{error}</div>;

  return <div className="bodyy">{quotes}</div>;
}

export default Body;
