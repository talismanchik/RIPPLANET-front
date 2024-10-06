import girl from '../../assets/images/accaunts/girl.png'

// TYPES
export type ContactType = {
    avatar?: string
    name: string
    lastMessage: string
    lastVisit: string
    unreadValue?: number
    lastMessageStatus?: 'send' | 'read'
    isSound?: boolean
    id: string
}


//DATA
export const contacts: ContactType[] = [
    {
        avatar: girl,
        id: '1',
        name: 'Вероника Георгиева',
        lastMessage: 'Привет Когда поедем?',
        lastVisit: '18:02',
        lastMessageStatus: "read"
    },
    {
        id: '2',
        name: 'Поддержка',
        lastMessage: 'Приветствуем в RIPPLANET! Приветствуем в RIPPLANET!',
        lastVisit: '19:04',
        unreadValue: 2
    },
    {
        id: '3',
        name: 'Ольга Булат',
        lastMessage: 'Глянь последний пост. Очень интересный',
        lastVisit: '11:52',
        lastMessageStatus: "read",
    },
    {
        id: '4',
        name: 'АннаОрлова',
        lastMessage: 'Глянь последний пост. Очень интересный',
        lastVisit: '12:34',
        lastMessageStatus: "send",
    },
    {
        avatar: girl,
        id: '5',
        name: 'Вероника Георгиева',
        lastMessage: 'Привет Когда поедем?',
        lastVisit: '18:02',
        lastMessageStatus: "read"
    },
    {
        id: '6',
        name: 'Поддержка',
        lastMessage: 'Приветствуем в RIPPLANET! Приветствуем в RIPPLANET!',
        lastVisit: '19:04',
        unreadValue: 2
    },
    {
        id: '7',
        name: 'Ольга Булат',
        lastMessage: 'Глянь последний пост. Очень интересный',
        lastVisit: '11:52',
        lastMessageStatus: "read",
    },
    {
        id: '8',
        name: 'АннаОрлова',
        lastMessage: 'Глянь последний пост. Очень интересный',
        lastVisit: '12:34',
        lastMessageStatus: "send",
    },
    {
        avatar: girl,
        id: '9',
        name: 'Вероника Георгиева',
        lastMessage: 'Привет Когда поедем?',
        lastVisit: '18:02',
        lastMessageStatus: "read"
    },
    {
        id: '10',
        name: 'Поддержка',
        lastMessage: 'Приветствуем в RIPPLANET! Приветствуем в RIPPLANET!',
        lastVisit: '19:04',
        unreadValue: 2
    },
    {
        id: '11',
        name: 'Ольга Булат',
        lastMessage: 'Глянь последний пост. Очень интересный',
        lastVisit: '11:52',
        lastMessageStatus: "read",
    },
    {
        id: '12',
        name: 'АннаОрлова',
        lastMessage: 'Глянь последний пост. Очень интересный',
        lastVisit: '12:34',
        lastMessageStatus: "send",
    },
    {
        avatar: girl,
        id: '13',
        name: 'Вероника Георгиева',
        lastMessage: 'Привет Когда поедем?',
        lastVisit: '18:02',
        lastMessageStatus: "read"
    },
    {
        id: '14',
        name: 'Поддержка',
        lastMessage: 'Приветствуем в RIPPLANET! Приветствуем в RIPPLANET!',
        lastVisit: '19:04',
        unreadValue: 2
    },
    {
        id: '15',
        name: 'Ольга Булат',
        lastMessage: 'Глянь последний пост. Очень интересный',
        lastVisit: '11:52',
        lastMessageStatus: "read",
    },
    {
        id: '16',
        name: 'АннаОрлова',
        lastMessage: 'Глянь последний пост. Очень интересный',
        lastVisit: '12:34',
        lastMessageStatus: "send",
    },

]