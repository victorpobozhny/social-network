import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Roman"},
        {id: 3, name: "Slavik"},
        {id: 4, name: "Misha"},
        {id: 5, name: "Pasha"},
        {id: 6, name: "Marat"}
    ]

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi, how are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "When i can see you?"},
        {id: 5, message: "Hello"},
        {id: 6, message: "Good morning"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
    )
}

export default Dialogs;