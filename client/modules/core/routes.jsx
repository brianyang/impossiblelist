import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/MainLayout.jsx';
import ItemList from '../items/components/ItemList.jsx';
import EditItem from '../items/components/EditItem.jsx';
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ItemList />)
      });
    }
  });

  FlowRouter.route('/edit', {
    name: 'items.edit',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditItem />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });  

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  }); 

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/');
    }
  });  
}
