// import the book images
import { Link } from "react-router-dom";
import { MINTFOURAGREEMENTS, MINTTHEFREEDOM } from "lib/routes";

const bookslive = [
  {
    id: 1,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    image:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1676940657/don_Miguel_Ruiz_9125_Aaron_Landman_2020_ykrxvg.jpg",
    url: "/protected/authors/buyfouragreement",
    available: "1246/10,000 Available",
    live: true,
  },
  {
    id: 2,
    title: "The Freedom of Being Who You Are",
    author: "Ernest Viñas",
    image:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1675790408/ernest_perfil_nueva_kjl3qi.png",
    url: "/protected/authors/buythefreedom",
    available: "2350/20,000 Available",
    live: true,
  },
];

const bookscomingsoon = [
  {
    id: 3,
    title: "The Almanack Of Naval Ravikant",
    author: "Eric Jorgenson",
    image:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1676942959/o19l7hd8hc55yvwgdjbjvke40gu3_ewader.jpg",
    available: "Available on March 25th",
    live: false,
  },
  {
    id: 4,
    title: "Twelve and a half",
    author: "Gary Vaynerchuk",
    image:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1676943243/gvg_mwceg9.jpg",
    available: "April 17th 2023",
    live: false,
  },
];

export default function Authors() {
  return (
    <div className="px-4 mb-20">
      <div className="space-y-8">
        <h1 className="text-center text-2xl font-bold text-debook-1">
          NOW AVAILABLE
        </h1>
        {/* Map books array to display each book card */}
        {bookslive.map((book) => (
          <div
            key={book.id}
            className="w-full h-[600px] shadow-2xl bg-debook-1 rounded-3xl"
          >
            <Link to={book.url}>
              <div className="h-[70%] rounded-t-3xl bg-white bg-opacity-80">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover rounded-t-3xl"
                />
              </div>
              <div className="h-[30%] text-white flex flex-col ml-4 justify-center">
                <h1 className="text-2xl font-bold">{book.title}</h1>
                <p className="text-lg">
                  by <span className="font-bold">{book.author}</span>
                </p>
                {book.available !== "COMING SOON" && <p>{book.available}</p>}
              </div>
            </Link>
          </div>
        ))}
        <h1 className="text-center text-2xl font-bold text-debook-1">
          COMING SOON
        </h1>
        {bookscomingsoon.map((book) => (
          <div
            key={book.id}
            className="w-full h-[600px] shadow-2xl bg-debook-1 rounded-3xl"
          >
            <Link to={book.url}>
              <div className="h-[70%] rounded-t-3xl bg-white bg-opacity-80">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover rounded-t-3xl"
                />
              </div>
              <div className="h-[30%] text-white flex flex-col ml-4 justify-center">
                <h1 className="text-2xl font-bold">{book.title}</h1>
                <p className="text-lg">
                  by <span className="font-bold">{book.author}</span>
                </p>
                {book.available !== "COMING SOON" && <p>{book.available}</p>}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
