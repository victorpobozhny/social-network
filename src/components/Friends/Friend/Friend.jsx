import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img className={s.image} src={props.img} alt={props.name}/>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default Friend;