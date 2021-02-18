import './App.css';
import React from 'react';

import { UserList } from './UserList';
import {Demo} from './Demo';
/* import {Calc} from './apps/Calc'; */

import {CalcC} from './apps/CalcC';
import {SimpleForm} from './SimpleForm';


const App = () => {

const users = [
  {
    name: 'Maksim',
    age: 16
  }
]

  return (
    <>
      <UserList />
      <Demo num={3} str={'Maksim'} logical={true} users={users}/>
      <Demo num={5} />
      <Demo num={6} />
      {/* <Calc /> */}
      <CalcC />
      <br></br>
      <br></br>
      <SimpleForm />
    </>
  );
}

export default App;
