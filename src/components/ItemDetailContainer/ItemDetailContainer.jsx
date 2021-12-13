import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../config/firebase/firestoreService";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemID } = useParams();

  useEffect(() => {
    getSingleProduct(itemID, setItem);
  }, [itemID]);

  return (
    <div className="detail">
      {Object.keys(item).length !== 0 ? (
        <Fragment>
          <ItemDetail item={item} />
          <button className="btn mainColorButton mt-5">
            <Link to="/" className="nav-link">
              Seguir Comprando
            </Link>
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <Skeleton variant="text" height={100} width="100%" className="mt-5" />
          <Skeleton variant="rectangular" width="100%" height={300} />
        </Fragment>
      )}
    </div>
  );
};

export default ItemDetailContainer;
