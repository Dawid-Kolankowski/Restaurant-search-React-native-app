import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
const navigator = createStackNavigator({


  Search:SearchScreen

  

},{initialRouteName:'Search',
defaultNavigationOptions:{
  title:'Food app!'
}})

export default createAppContainer(navigator)