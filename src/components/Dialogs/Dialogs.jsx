import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Roman"},
        {id: 3, name: "Slavik"},
        {id: 4, name: "Misha"},
        {id: 5, name: "Pasha"},
        {id: 6, name: "Marat"}
    ]

    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi, how are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "When i can see you?"},
        {id: 5, message: "Hello"},
        {id: 6, message: "Good morning"},
    ]

    let dialogElements = [
        dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    ]


    let messagesElements = [
        messages.map(m => <Message id={m.id} message={m.message}/>)
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;