import React from 'react';
import {View, Text} from 'react-native';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';

function AppIcon() {
    return(
        <View>
            <Text>Ahihi with love</Text>
            <FontAwesomeIcon icon={faMugSaucer}/>
        </View>
    )
}