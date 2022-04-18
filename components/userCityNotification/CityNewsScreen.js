import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Event from './event/Event';
import Notification from './notification/Notification';

const renderScene = SceneMap({
  first: Notification,
  second: Event,
});

export default function CityNewsScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Notifications'},
    {key: 'second', title: 'Events'},
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
