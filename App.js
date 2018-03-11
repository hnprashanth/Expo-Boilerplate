import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import store from './store';
import Auth from './components/Auth';
import Home from './components/Home';

const AppStack = StackNavigator({ Home });
const AuthStack = StackNavigator({ Auth });

const MainNavigator = SwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
