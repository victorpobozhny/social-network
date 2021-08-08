import s from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {

    let list = [
        props.state.map(l => <Friend img={l.src} name={l.name} />)
    ]
    return (
        <div className={s.friends}>
            {list}
        </div>
    )
};

export default Friends;