import React, { FunctionComponent } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const Messages: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Messages</Text>
        </View>
    );
};

export default Messages;
