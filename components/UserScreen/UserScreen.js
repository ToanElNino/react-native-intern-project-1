import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import User from '../User/User';
import TodoList from '../Todo/TodoList';
import ListTest from '../../flatlisttest/FlatListTest';

const renderScene = SceneMap({
  first: ListTest,
  second: User,
});

export default function UserScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'User information'},
    {key: 'second', title: 'Todo list'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
