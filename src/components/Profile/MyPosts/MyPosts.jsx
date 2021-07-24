//import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>New post
          <textarea ></textarea>
          <button>Add new post</button>
        </div>
        <Post message="Hello, how are you?" numberOfLikes="15"/>
        <Post message="Welcome to my page" numberOfLikes="20"/>

      </div>
  )
}

export default MyPosts;