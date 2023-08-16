import { StyleSheet } from 'react-native';
import { Device } from '../../../utils';
import { makeStyles } from '@rneui/themed';



const PADDING = 40;

const useStyles = makeStyles(({colors}) => ({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.10)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3000,
    },
    container: {
        width: Device.getDeviceWidth() - PADDING * 3,
        height: Device.getDeviceHeight() / 3,
        borderRadius: 20,
        backgroundColor: colors.background,
       // backgroundColor: 'rgba(256, 256, 256, 2)',
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 8,
    },
    descriptionStyle: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 32,
    },
    bottomStyle: {
        borderTopColor: '#CCC',
        borderTopWidth: 0.5,
        borderStyle: 'solid',
        flexDirection: 'row',
        height: 50,
        width: '100%',
    },
    buttonStyleCancel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#CCC',
        borderRightWidth: 0.25,
        borderStyle: 'solid',
        width: (Device.getDeviceWidth() - PADDING * 2) / 2,
    },
    buttonStyleOk: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#CCC',
        borderLeftWidth: 0.25,
        borderStyle: 'solid',
        width: (Device.getDeviceWidth() - PADDING * 2) / 2,
    },
    textOption: {
        fontSize: 16,
        color: '#18A0FB',
    },
}));

export default useStyles;
