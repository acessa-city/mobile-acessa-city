import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Report from './pages/Report';
import SetReport from './pages/SetReport';
import Autentication from './pages/autentication';
import Profile from './pages/Profile/Profile'
import ProfileSettings from './pages/Profile/ProfileSettings'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Acessa City'
            }
        },
        Autentication: {
            screen: Autentication,
            navigationOptions: {
                title: 'Autenticação'
            }
        },
        Report: {
            screen: Report,
            navigationOptions: {
                title: 'Lista de Denúncias'
            }
        },
        SetReport: {
            screen: SetReport,
            navigationOptions: {
                title: 'Denúnciar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil'
            }
        } ,
        ProfileSettings: {
            screen: ProfileSettings,
            navigationOptions: {
                title: 'Configurações do pefil'
            }
        } 
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#909090',

            },
            headerTintColor: '#fff',
            headerTitleAlign: "center"
        },
    })
);

export default Routes;