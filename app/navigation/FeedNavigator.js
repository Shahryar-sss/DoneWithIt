import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingsScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.LISTING_SCREEN} component={ListingScreen} />
        <Stack.Screen
            name={routes.LISTING_DETAILS}
            component={ListingDetailsScreen}
        />
    </Stack.Navigator>
);

export default FeedNavigator;
