import shirt1 from '../assets/images/shirt.jpeg';
import shirt2 from '../assets/images/shirt2.jpeg';
import shirt3 from '../assets/images/shirt3.avif';
import shoes1 from '../assets/images/shoes.jpeg';
import shoes2 from '../assets/images/shoes2.avif';
import red1 from '../assets/images/redshirt.avif';
import red2 from '../assets/images/redshirt2.webp';
import jeans1 from '../assets/images/jeans2.jpeg';
import jeans2 from '../assets/images/jeans.jpeg';
import jeans3 from '../assets/images/jean3.jpeg';
import adidas1 from '../assets/images/adi.jpg';
import adidas2 from '../assets/images/adi2.jpeg';



const dummyItems = [
    {
      name: "Red Flannel Shirt",
      type: "Shirt",
      description: "A cozy red flannel shirt, perfect for winter layering.",
      coverImage:red1,
      additionalImages: [
        red2
      ]
    },
    {
      name: "Denim Jeans",
      type: "Pant",
      description: "Classic blue denim jeans with a straight fit.",
      coverImage:jeans1,
      additionalImages: [
        jeans2,jeans3
      ]
    },
    {
      name: "Nike Running Shoes",
      type: "Shoes",
      description: "Lightweight and comfortable shoes built for speed.",
      coverImage: shoes1,
      additionalImages: [
        shoes2
      ]
    },
    {
      name: "Adidas Sports Jacket",
      type: "Sports Gear",
      description: "Stylish windbreaker for workouts and outdoor sports.",
      coverImage: adidas1,
      additionalImages: [
       adidas2
      ]
    },
    {
      name: "White Cotton Shirt",
      type: "Shirt",
      description: "Plain white tee for everyday comfort and style.",
      coverImage: shirt2,
      additionalImages: [
        shirt3,shirt1
      ]
    }
  ];
  
  export default dummyItems;
  