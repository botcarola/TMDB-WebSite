import { Link } from "react-router-dom";
import  logoNav from "../assets/logoNav.svg";

const Nav = () => {
    return (
        <nav className="bg-stone-900 flex text-gray-50 justify-between text-xl">
            <div className="flex w-2/6 items-center justify-evenly">
                <a href="https://www.themoviedb.org/">
                    <img className="h-20" src={logoNav} alt="the movie database logo"/>
                </a>
                <form>
                    <label>
                        <input type="submit" />
                    </label>
                    <label>
                        <input type="text" placeholder="Search something"/>
                    </label>
                </form>
            </div>
          <div className="flex w-96 justify-evenly items-center">
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/tv">TV</Link>
          </div>          
        </nav>
    )
}

export default Nav;

