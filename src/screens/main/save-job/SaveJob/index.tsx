import React, { FunctionComponent, useState } from 'react';

import { View } from 'react-native';

import styles from './styles';
import { Text } from '@rneui/base';


const SaveJob: FunctionComponent = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const onValueChange = () => {
        setToggle(!toggle);
    };

    return (
        <View style={styles.container}>
           <Text>Hi</Text>
        </View>
    );
};

export default SaveJob;
