import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { id, bookName, image, publisher, rating, tags, author } = book;
  
  return (
    <div className="card bg-base-100 w-96 border-2">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl bg-gray-200 p-20" />
      </figure>
      <div className="card-body font-medium">
        <div className="flex gap-4 ">
          {tags.map((tag) => (
            <span
              className=" p-2 rounded-lg text-green-500 font-medium bg-green-100"
              key={tag.id}
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p className=" border-b border-dashed pb-2">By : {author}</p>
        <div className="flex justify-center border-b border-dashed pb-2">
          <p>Fiction</p>
          <div className="flex items-center gap-1">
            <p>{rating}</p>
            <p>
              {" "}
              <IoIosStarOutline></IoIosStarOutline>
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to={`/book/${id}`}>
            <button className="rounded-md mt-5 p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
              View Detalis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
