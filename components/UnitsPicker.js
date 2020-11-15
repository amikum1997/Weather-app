import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { colors } from '../utils/index'

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View style={styles.unitsSystem}>
            <Picker selectedValue={unitsSystem} onValueChange={(item) => setUnitsSystem(item)} mode="dropdown">
                <Picker.Item label="Cº" value="metric" />
                <Picker.Item label="Fº" value="imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -20,
            },
            android: {
                top: 40,
            }
        }),
        height: 50,
        width: 100,
        left: 20,
        backgroundColor: '#dbdbdb',
        borderRadius: 10,
    }
})