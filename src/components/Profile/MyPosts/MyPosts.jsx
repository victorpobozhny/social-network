import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        props.state.map(p => <Post id={p.id} message={p.message} likes={p.likes}/>)
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