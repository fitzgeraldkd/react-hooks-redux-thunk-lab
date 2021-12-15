import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CatList from './CatList.js';
import { fetchCats } from "./catsSlice.js";

function Cats() {
  const catPics = useSelector(state => state.entities);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div>
      <h1>CatBook</h1>
      {status === 'loading' && <div>Loading...</div>}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
