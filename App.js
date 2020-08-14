import React, { useState } from "react";

// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
// import Icon from "./app/components/Icon";
// import Screen from "./app/components/Screen";
// import ListItem from "./app/components/ListItem";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import AppTextInput from "./app/components/AppTextInput";
// import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

// const categories = [
//     { label: "Furniture", value: 1 },
//     { label: "Clothing", value: 2 },
//     { label: "Cameras", value: 3 },
// ];

export default function App() {
    // return <WelcomeScreen />;
    // return <ViewImageScreen />
    // return <Card image={require('./app/assets/jacket.jpg')} title="Red jacket for sale" subTitle="$100"/>
    // return <ListingDetailsScreen />
    // return <MessagesScreen />
    // return (
    //     <Screen>
    //         <ListItem title="My title" ImageComponent={<Icon name="email"/>} />
    //     </Screen>
    // );
    // return <AccountScreen />
    // return <ListingsScreen />
    // return <Screen><AppTextInput icon="email" placeholder="Enter name" /></Screen>

    // const [category, setCategory] = useState();
    // return (
    //     <Screen>
    //         <AppPicker
    //             icon="apps"
    //             placeholder="Category"
    //             items={categories}
    //             selectedItem={category}
    //             onItemSelect={(item) => setCategory(item)}
    //         />
    //         <AppTextInput icon="email" placeholder="Email" />
    //     </Screen>
    // );
    // return <LoginScreen />
    return <ListingEditScreen />
    // return <RegisterScreen />
}
