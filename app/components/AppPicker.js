import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.json";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({
    icon,
    items,
    onItemSelect,
    placeholder,
    selectedItem,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem,
    width = "100%",
}) {
    const [visible, setModalVisible] = useState(false);
console.log(selectedItem);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={25}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText style={styles.placeholder}>
                            {placeholder}
                        </AppText>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={25}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={visible} animationType="slide">
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) => (
                        <PickerItemComponent
                            item={item}
                            onPress={() => {
                                setModalVisible(false);
                                onItemSelect(item);
                            }}
                        />
                    )}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
    },
    text: {
        flex: 1,
    },
});

export default AppPicker;
