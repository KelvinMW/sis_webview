import AsyncStorage from '@react-native-async-storage/async-storage';

// utility functions to store and retrieve passwords
export const storePassword = async (password) => {
    await AsyncStorage.setItem('@user_password', password);
}

export const retrievePassword = async () => {
    const password = await AsyncStorage.getItem('@user_password');
    return password;
}
