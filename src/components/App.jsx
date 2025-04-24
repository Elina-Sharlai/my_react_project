import "./App.css";
import Product from "./Product";
import BookList from "./BookList";

const favBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product name="Tacos With Lime" />
      <Product name="Fries and Burger" />

      <>
        <h1>Books of the week</h1>
        <BookList books={favBooks} />
      </>
    </div>
  );
}
