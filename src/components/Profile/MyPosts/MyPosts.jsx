import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hello, how are you", likes: 15},
        {id: 2, message: "Welcome to my page", likes: 20}
    ]

    let posts = [
        postsData.map(p => <Post id={p.id} message={p.message} likes={p.likes}/>)
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
            {posts}
        </div>
    )
}

export default MyPosts;