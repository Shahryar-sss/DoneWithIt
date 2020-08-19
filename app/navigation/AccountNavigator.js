import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './routes';

const Stack = createStackNavigator();
const AccountNavigator = () => (
    <Stack.Navigator mode="card">
        <Stack.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;