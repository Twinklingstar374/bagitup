import React, { useEffect, useState } from 'react';
import './ViewItem.css'; // 👈 Import the CSS
import ItemModal from "../components/itemModal";
import dummyItems from '../data/dummyData';

function ViewItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem('items'));

    if (!localItems || localItems.length === 0) {
      localStorage.setItem('items', JSON.stringify(dummyItems));
      setItems(dummyItems);
    } else {
      setItems(localItems);
    }
  }, []);

  return (
    <div className="view-items-container">
      <video autoPlay loop muted className="background-video">
        <source src="/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 className="items-heading">All Items</h2>

      <div className="item-grid">
        {items.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="item-card"
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.coverImage} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
          ))
        )}
      </div>

      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default ViewItems;
