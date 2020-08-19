import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors.json";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    return (
        <View>
            <Image source={listing.image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Mosh Hamedani"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;
