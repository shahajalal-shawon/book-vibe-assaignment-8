import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    // console.log(id);
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    console.log(book);
    return (
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 flex items-center justify-center p-16 bg-gray-200">
            <img className="h-[300px]   " src={book.image} alt="" />
          </div>
          <div className="md:col-span-3  space-y-4">
            <h1 className="text-4xl">{book.bookName}</h1>
            <p className="border-b pb-2 font-medium">By : {book.author}</p>
            <p className="border-b pb-2 font-medium">Fiction</p>
            <p>
              <span className="font-bold">Review :</span> {book.review}
            </p>
            <div className="flex gap-4  items-center border-b pb-5">
              <span className="font-bold">Tags:</span>{" "}
              {book.tags.map((tag) => (
                <span
                  className=" px-2 rounded-lg text-green-500 font-medium bg-green-100"
                  key={tag.id}
                >
                  # {tag}
                </span>
              ))}
            </div>
            <p className="font-medium">Number Of Pages : {book.totalPage}</p>
            <p className="font-medium ">Publisher : {book.publisher}</p>
            <p className="font-medium ">Year of Publishing : {book.yearOfPublishing}</p>
            <p className="font-medium ">Rating : {book.rating}</p>
            <div className="flex  gap-5">
              <a className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-600 transition-colors duration-300 ease-out border-2 border-green-600 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-600 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Read</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
              <a className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-600 transition-colors duration-300 ease-out border-2 border-green-600 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-600 group-hover:-rotate-180 ease"></span>
                  <span className="relative">WishList</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;