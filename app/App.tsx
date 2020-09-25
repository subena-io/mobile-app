import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import Login from './src/views/Login';
import Home from './src/views/Home';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from './src/views/Loading';
import Button from './src/components/Button';

import crashlytics from '@react-native-firebase/crashlytics';

export default class App extends React.Component {

  state = {
    user: null,
    isConnected: null
  }

  async componentDidMount() {
    crashlytics().log('App mounted.');

    const isConnected = await AsyncStorage.getItem('@connected') === "true";
    this.setState({ isConnected })
  }

  loginUser = () => {
    AsyncStorage.setItem('@connected', "true");
    this.setState({ isConnected: true });
  }

  logoutUser = () => {
    AsyncStorage.setItem('@connected', "false")
    this.setState({ isConnected: false });
  }

  crashApp = () => {
    crashlytics().crash();
  }

  render() {
    if (this.state.isConnected === null)
      return <Loading />;

    return (
      <>
        {!this.state.isConnected && <Login login={this.loginUser}/>}
        {this.state.isConnected && <Home logout={this.logoutUser}/>}
        <Button title="Crash app" onPress={this.crashApp} />
      </>
    );
  }
};

const styles = StyleSheet.create({
});
