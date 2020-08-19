import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors.json";

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission;
    }, []);

    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!result.granted)
            alert("You need to enable permission to access the image library.");
    };

    const handlePress = () => {
        if (!imageUri) selectImage();
        else {
            Alert.alert(
                "Delete",
                "Are you sure you want to delete this image ?",
                [
                    { text: "Yes", onPress: () => onChangeImage() },
                    { text: "No" },
                ]
            );
        }
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (e) {
            console.log("error occurred", e);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons
                        name="camera"
                        color={colors.medium}
                        size={40}
                    />
                )}
                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default ImageInput;
