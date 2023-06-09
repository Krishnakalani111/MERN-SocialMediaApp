import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ userID }) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = userID
        ? await axios.get("/posts/profile/" + userID)
        : await axios.get(`posts/timeline/${user._id}`);
      console.log(res.data);
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    };

    fetchPosts();
  }, [user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!userID || userID === user._id) &&<Share />} 
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
