import React from 'react';
import Userslist from './UsersList';

export default {
  title: 'user list',

  component: Userslist,
};

const people = ['tariq', 'javid', 'peter', 'jhon'];
export const userList = () => <Userslist users={people} />;
