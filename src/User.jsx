/* Используя массив пользователей и компоненты из предыдущего задания, реализуйте 
внутри компонента User следующую функциональность:

Если в name содержится буква `e`, то текст должен быть следующим: `It’s Premium User! Welcome, ${name}!`
Если name больше 5 букв, то обрезать имя до 5 букв, добавляя три точки к концу имени. Пример: Vladislav => 
It’s user Vladi...
Если имя - палиндром (без учета регистра), на элемент должен примениться класс `name--highlighted`, 
который применяет красный цвет к тексту элемента    */



import React from 'react';


const User = (props) => {

    return (
        <>
            { props.name.includes('e') ? <li>It’s Premium User! Welcome, {props.name}</li> :
                props.name.length > 5 ? <li>It’s user {props.name.slice(0, 5)}...</li> :
                    props.name.toLowerCase() === props.name.toLowerCase().split('').reverse().join('') ?
                        <li className="name-highlighted">It’s user {props.name}</li> : <li>It’s user {props.name}</li>
            }
        </>
        /*         <>
                    {props.children}
                </> */
    );
}

export { User };