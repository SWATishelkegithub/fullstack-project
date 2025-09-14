import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/stores").then(res => setStores(res.data));
  }, []);

  return (
    <div>
      <h2>Stores</h2>
      <ul>
        {stores.map(store => (
          <li key={store.id}>{store.name} - {store.address} ⭐ {store.rating}</li>
        ))}
      </ul>
    </div>
  );
}
