import React, { useState } from 'react';
import './AddItem.css';

function AddItem() {
  const [item, setItem] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: [],
  });

  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleCoverImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setItem((prev) => ({ ...prev, coverImage: reader.result }));
    };
    if (file) reader.readAsDataURL(file);
  };

 
  const handleAdditionalImages = (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    const readFilesAsBase64 = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readFilesAsBase64).then((images) => {
      setItem((prev) => ({
        ...prev,
        additionalImages: images,
      }));
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const existingItems = JSON.parse(localStorage.getItem('items')) || [];
    localStorage.setItem('items', JSON.stringify([...existingItems, item]));
    setSuccess(true);
    setItem({
      name: '',
      type: '',
      description: '',
      coverImage: '',
      additionalImages: [],
    });
    e.target.reset(); 
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="addingpage">
      <video autoPlay loop muted className="video">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="form">
      <h2 style={{ textAlign: "center", fontSize: "30px", color: "rgba(251, 251, 251, 0.96)" }}>Add New Item</h2>
        {success && <p className="success">Item successfully added!</p>}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Item Name"
            onChange={handleInputChange}
            required
          />
          <select name="type" onChange={handleInputChange} required>
            <option value="">Select Item Type</option>
            <option>Shirt</option>
            <option>Pant</option>
            <option>Shoes</option>
            <option>Sports Gear</option>
            <option>Watch</option>
            <option>Bag</option>
            <option>Accessories</option>
            <option>Winter Wear</option>
          </select>
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleInputChange}
            required
          />
          <label>Cover Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImage}
            required
          />

          <label>Additional Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleAdditionalImages}
          />

          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
