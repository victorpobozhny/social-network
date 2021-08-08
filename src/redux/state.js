let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello, how are you", likes: 15},
            {id: 2, message: "Welcome to my page", likes: 20},
            {id: 3, message: "Everything is possible, my friend", likes: 22}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Andrew"},
            {id: 2, name: "Roman"},
            {id: 3, name: "Slavik"},
            {id: 4, name: "Misha"},
            {id: 5, name: "Pasha"},
            {id: 6, name: "Marat"}
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Hi, how are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "When i can see you?"},
            {id: 5, message: "Hello"},
            {id: 6, message: "Good morning"},
        ]
    },
    sidebar: [
        {id: 1, name: "Andrew", src: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id: 2, name: "Marat", src: "http://bygaga.com.ua/uploads/posts/2013-07/1373469484_kak_delayutsya_avatarki.jpeg"},
        {id: 3, name: "Roma", src: "https://multfilmi-online.ru/uploads/posts/2020-08/angry-birds-2-v-kino-kartinki-avatarki-s-glavnymi-gerojami-novosti-multfilmov-1.jpg"}
    ]
}

export default state;