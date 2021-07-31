import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
      <div className={s.postsBlock}>
          <h3>My posts</h3>
        <div>New post
          <div><textarea ></textarea></div>
          <div className={s.button}><button>Add new post</button></div>
        </div>
        <Post message="Hello, how are you?" numberOfLikes="15"/>
        <Post message="Welcome to my page" numberOfLikes="20"/>

      </div>
  )
}

export default MyPosts;