import { Link } from 'react-router-dom';
import background from '../../assets/pngwing 1.png'
const Bannar = () => {
    return (
      <div className="sm:flex sm:w-full justify-evenly bg-gray-200 items-center max-w-7xl mx-auto p-16 my-16 rounded-lg">
        <div>
          <h1 className="text-6xl font-bold">
            Books to freshen up <br /> Your{" "}
            <span className="bg-gradient-to-r bg-300% from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Bookshelf</span>
          </h1>
          <Link to="">
            <button className="rounded-md mt-5 p-2 bg-gradient-to-r from-green-500 to-blue-500">
              View The List
            </button>
          </Link>
        </div>
        <img src={background} alt="" />
      </div>
    );
};

export default Bannar;