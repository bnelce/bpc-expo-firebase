import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
    },
    headerContainer: {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    stories: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: '#ececec',
        paddingHorizontal: 8
    },
})


export default styles;