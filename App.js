import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
const navigator = createStackNavigator({


  Search:SearchScreen
  
  

},{initialRouteName:'Search',
defaultNavigationOptions:{
  headerShown:false
}})

export default createAppContainer(navigator)