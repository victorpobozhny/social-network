import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Andrew" id="1" />
                <DialogItem name="Roman" id="2" />
                <DialogItem name="Slavik" id="3" />
                <DialogItem name="Misha" id="4"/>
                <DialogItem name="Pasha" id="5" />
                <DialogItem name="Marat" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hello" />
                <Message message="Hi, how are you?" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;