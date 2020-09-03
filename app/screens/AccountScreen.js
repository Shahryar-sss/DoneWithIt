import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Icon from "../components/Icon";

import colors from "../config/colors.json";
import ListItemSeperator from "../components/ListItemSeperator";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES_SCREEN,
    },
];

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    style={styles.listItem}
                    title={user.name}
                    subTitle={user.email}
                    image={require("../assets/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => (
                        <ListItem
                            style={styles.listItem}
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                style={styles.listItem}
                title="Logout"
                onPress={() => logOut()}
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    listItem: {
        backgroundColor: colors.white,
    },
    screen: {
        backgroundColor: colors.light,
    },
});

export default AccountScreen;
