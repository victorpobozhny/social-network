import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hello, how are you", likes: 15},
        {id: 2, message: "Welcome to my page", likes: 20}
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>New post
                <div><textarea>

          </textarea></div>
                <div className={s.button}>
                    <button>Add new post</button>
                </div>
            </div>
            <Post id={postsData[0].id} message={postsData[0].message} likes={postsData[0].likes}/>
            <Post id={postsData[1].id} message={postsData[1].message} likes={postsData[1].likes}/>
        </div>
    )
}

export default MyPosts;