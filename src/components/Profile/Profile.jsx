import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
    debugger;
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts state={props.posts}/>
        </div>
    )
}

export default Profile;