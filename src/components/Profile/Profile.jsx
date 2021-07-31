import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = () => {
    let postsData = [
        {id: 1, message: "Hello, how are you", likes: 15},
        {id: 2, message: "Welcome to my page", likes: 20},
        {id: 3, message: "Everything is possible, my friend", likes: 22}
    ]
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts data={postsData}/>
        </div>
    )
}

export default Profile;