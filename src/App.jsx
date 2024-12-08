import Directory from "./components/directory/directory.component";

const categories = [
  {
    id: 1,
    title: "electronics",
    imageUrl:
      "https://images.pexels.com/photos/4379288/pexels-photo-4379288.jpeg",
    route: "/shop/electronics",
  },
  {
    id: 2,
    title: "jewelery",
    imageUrl:
      "https://images.pexels.com/photos/5441007/pexels-photo-5441007.jpeg",
    route: "/shop/jewelery",
  },
  {
    id: 3,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "/shop/mens",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "/shop/womens",
  },
];


function App() {
  return (
    <>
      <Directory categories={categories} />
    </>
  );
}

export default App;
