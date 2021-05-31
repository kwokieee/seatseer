import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Search() {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { background: colors.background }]}>
            <Text style = {{color:colors.text}}>Search tab</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
      },
})