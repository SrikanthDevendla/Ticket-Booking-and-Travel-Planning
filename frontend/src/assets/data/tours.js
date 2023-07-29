import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Taj Mahal",
    city: "Agra",
    distance: 300,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 10,
    desc: "This is the description",
    reviews: [
      {
        name: "Vaibhav",
        rating: 4.6,
      },
      {
         name: "Srikanth",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Rudhraprayag",
    city: "Kedarnath",
    distance: 400,
    address: 'SomeWhere',
    price: 96,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      {
        name: "Harshit",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Manali",
    city: "Kullu Manali",
    distance: 500,
    address: 'SomeWhere',
    price: 76,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      {
        name: "Khushboo",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Bikaner",
    city: "Jaisalmer",
    distance: 500,
    address: 'SomeWhere',
    price: 85,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      {
        name: "Gurusaran",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Goa Beach",
    city: "Goa",
    distance: 500,
    address: 'SomeWhere',
    price: 75,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      {
        name: "Srikanth",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "City of Lake",
    city: "Nainital",
    distance: 500,
    address: 'SomeWhere',
    price: 88,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      {
        name: "Harshit",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Kerala Boat Ride",
    city: "Kerala",
    distance: 500,
    address: 'SomeWhere',
    price: 79,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      {
        name: "Vaibhav",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Golden Temple",
    city: "Amritsar",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      {
        name: "Gurusaran",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
