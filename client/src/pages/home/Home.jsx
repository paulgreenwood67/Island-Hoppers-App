import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";



//function for the home page 
// with the useEffect function to load the island names from mongoDB on start up 
//along with the header component for the main image and the side bar component
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
      <div className="homePost">
      
     
        
      
       
         <h1 className="aboutTitle">
         Welcome to <span className="aboutTitle">iSLAND HOPPERS</span>.
        </h1>
        
        <p>Island Hoppers is a blogging platform that allows you to share your reviews of the incredible 
          islands you have explored in Greece. Our blogs, called <b>'hops,' </b>provide a wonderful opportunity to document 
          your adventures, and by joining us, you become a valued member of our community of <b>'hoppers.'</b><br></br><br></br>
          So, why not hop aboard and share your experiences of the breathtaking Greek islands with us? We can't wait to hear all about it!</p>
          <div >
          <span className = "writeHop">
            
          <h2>Want to write a hop?</h2>
        <Link to="/write">
          <button className="btn">Hop over here</button>
        </Link>
        
            </span>
            <img src={"https://www.tripsavvy.com/thmb/oiCD50g4KEb9Ft2zQqwdl3JJfrU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/navagio-bay--zakynthos--greece---shipwreck-beach-1061326158-58458295528941059a81d843388f56d2.jpg"} className="welcomeImgTwo" alt="My Image" />
            </div>

            <div className="columns">
            <div className="homePostColumns">
          <h2>How to use</h2>
          <p>To create a hop on Island Hoppers, sign in and select 'Write'. If you don't have an account, create one first. Don't forget to select an island from the variety of Greek islands available and publish your hop. It'll appear as a brief summary on the Hops page. You can view, edit or delete your post anytime. Note that Island Hoppers' admin can also edit or delete any post. Join the community and start sharing your island experiences today!</p>

        </div>
        <div className="homePostColumns">
          <h2>Greek Islands</h2>
          <p>The Greek Islands, located in the Aegean and Ionian Seas, consist of over 6,000 islands and islets. From the Cyclades and the Dodecanese to the Sporades and the Ionian Islands, each island group has its own character and charm, with beautiful beaches, historic landmarks, and delicious Greek cuisine. The hospitality of the locals makes the Greek Islands a welcoming destination for travelers from all over the world.</p>

        </div>
      
        </div>

          </div>
          <div className="homePostPicture">
        <img src={"https://www.tripsavvy.com/thmb/oiCD50g4KEb9Ft2zQqwdl3JJfrU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/navagio-bay--zakynthos--greece---shipwreck-beach-1061326158-58458295528941059a81d843388f56d2.jpg"} className="welcomeImgOne" alt="My Image" />
        <img src={"https://travellersworldwide.com/wp-content/uploads/2022/05/shutterstock_1426298471.png.webp"} className="welcomeImgOne" alt="My Image" />
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Uduk7klwp3owWZ2PD--Wlt9HvwwOYz_iHPEDuLDd5YHfmV26m3t9P7O2xvi5rgzORlU&usqp=CAU"} className="welcomeImgOne" alt="My Image" />
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8AkKCcG7DUx09KCpsuUJHbQKeL5NDrdzHA&usqp=CAU"} className="welcomeImgOne" alt="My Image" />
        </div>


        <Sidebar />
        
      </div>
      
    </>
  );
}

