import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { 
  createSwitchNavigator, 
  createAppContainer, 
  createDrawerNavigator, 
  createBottomTabNavigator, 
  createStackNavigator
} 
from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> WelcomeScreen </Text>
        <Button title="Login" onPress={ () => this.props.navigation.navigate('Dashboard') } />
      </View>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> DashboardScreen </Text>
      </View>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Go To Detail Screen" onPress={() => this.props.navigation.navigate('Detail') }/>
      </View>
    );
  }
}

class Detail extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Detail</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Profile </Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Settings </Text>
      </View>
    );
  }
}

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Feed',
        headerLeft: <Icon style={{marginLeft: 10}} onPress={() => navigation.openDrawer() } name="md-menu" size={30} color="#900" />
      }
    }
  },
  Detail: {
    screen: Detail
  }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Profile',
        headerLeft: <Icon style={{marginLeft: 10}} onPress={() => navigation.openDrawer() } name="md-menu" size={30} color="#900" />
      }
    }
  }
})

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Settings',
        headerLeft: <Icon style={{marginLeft: 10}} onPress={() => navigation.openDrawer() } name="md-menu" size={30} color="#900" />
      }
    }
  }
})

const DashboardTabNavigator = createBottomTabNavigator({
  Feed: FeedStack, 
  Profile: ProfileStack, 
  Settings: SettingsStack
}, {
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      header: null,
      headerTitle: routeName
    }
  }
})

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
}, {
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: <Icon style={{marginLeft: 10}} onPress={() => navigation.openDrawer() } name="md-menu" size={30} color="#900" />
    }
  }
})

const AppDrawerNavigation = createDrawerNavigator({
  dashboard: {
    screen: DashboardStackNavigator
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigation }
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;