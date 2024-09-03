import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { id, bookName, image, publisher, rating, tags, author } = book;
  
  return (
    <Link to={`/book/${id}`}>
      <div className="card bg-base-100 w-96 border-2">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl bg-gray-200 p-20"
          />
        </figure>
        <div className="card-body font-medium">
          <div className="flex gap-4 ">
            {tags.map((tag) => (
              <span
                className=" px-2 rounded-lg text-green-500 font-medium bg-green-100"
                key={tag.id}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className=" border-b border-dashed pb-2">By : {author}</p>
          <div className="flex justify-center ">
            <p>Fiction</p>
            <div className="flex items-center gap-1">
              <p>{rating}</p>
              <p>
                {" "}
                <IoIosStarOutline></IoIosStarOutline>
              </p>
            </div>
          </div>
          </div>
        </div>
    </Link>
  );
};

export default Book;
