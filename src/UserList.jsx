/* Создайте компонент UserList, а также компонент User, который будет принимать в props’ах name 
(имя пользователя). И рендерить строку в span вида `It’s user ${name}`
Далее Вам необходимо в компоненте UserList пройтись по массиву пользователей: 
[{id: "uniq1", name:"Paul"}, {id: "uniq2", name:"Mary"}, {id: "uniq3", name:"Viktor"}, 
{id: "uniq4", name:"Suzanna"}, {id: "uniq5", name:"Peter"}, {id: "uniq6", name:"Vladislav"}, 
{id: "uniq7", name:"Anna"}]
и отрендерить каждый элемент массива с помощью компонента User, пробросив ему нужное поле в качестве props */

import React from 'react';
import { User } from './User';
/* import { ComposebaleUser } from './ComposebaleUser'; */

const UserList = () => {

    const users = [
        { id: "uniq1", name: "Paul" },
        { id: "uniq2", name: "Mary" },
        { id: "uniq3", name: "Viktor" },
        { id: "uniq4", name: "Suzanna" },
        { id: "uniq5", name: "Peter" },
        { id: "uniq6", name: "Vladislav" },
        { id: "uniq7", name: "Anna" }
    ];

    return (
        <ul>
            {users.map(item => <User key={item.id} name={item.name} />)}
            {/* <User><ComposebaleUser>Viktor</ComposebaleUser></User> */}
        </ul>
    );
}

export { UserList };