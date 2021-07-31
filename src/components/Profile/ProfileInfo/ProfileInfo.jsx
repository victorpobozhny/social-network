import s from "./ProfileInfo.module.css";

let ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.backPicture}
                     src="https://images.unsplash.com/photo-1472494045622-4d7f7e1a9eab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
                     alt="Mountains">

                </img>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}


export default ProfileInfo;