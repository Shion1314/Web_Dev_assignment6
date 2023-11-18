import React from "react";
import { Outlet, Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <h2>Welcome to the Open Library Explorer!</h2>
      <p>
        This application utilizes the Open Library API to provide information
        about books and authors. Explore the world of literature by searching
        for your favorite authors or discovering random books.
      </p>
      <p>
        Use the navigation above to get started, and enjoy your journey through
        the vast collection of the Open Library.
      </p>
      <ul>
            <li>
              <Link to ={`author's_Book/`}>Searching for Author's Book</Link>
            </li>
     
            

          </ul> 

    






    </div>
    

    
    
  );
};

export default Home;
