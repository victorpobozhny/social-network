import s from "./Post.module.css";

const Post = (props) => {
  return (
          <div className={s.item}>
            <img className={s.image} src="https://aquazoom.ru/dog/images/543.jpg" alt="Avatar"></img>
            <div>{props.message}</div>
            <div>
              <span className={s.likes}>already {props.numberOfLikes} people liked that post :)</span>
            </div>
          </div>
  )
}

export default Post;