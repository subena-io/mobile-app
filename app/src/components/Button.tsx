import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import R from 'res/R';

interface ButtonProps {
    title: string
    onPress: () => void
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        const { title, onPress } = this.props;

        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.view}
            >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        height: 44,
        borderRadius: 22,
        width: 252,
        backgroundColor: R.colors.gold,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: R.colors.white,
        fontSize: 20
    }
});