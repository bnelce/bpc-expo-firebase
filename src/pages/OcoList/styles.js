import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: Dimensions.get('screen').width,
      alignItems: 'center',
      marginTop: 30,
  },
    listContainer: {
      width: Dimensions.get('screen').width
    },
      itemContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 5,
        borderRadius: 4,    
        marginBottom: 1,
        marginTop: 2,
        marginLeft: 5,
        marginRight: 5
      },
      contentContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-around",
        alignItems: "stretch",
      },
      avatarContainer: {
        width: 60,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        
      },
      textContainer: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 5,
      },
      shareIconContainer: {
        width: 60,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap"
      },
      localization: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 20,
      },
      subactivity: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 20,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },    
      logo: {
        width: 120,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
    
      submitButton: {
        backgroundColor: '#FF4500',
        borderRadius: 4,
        padding: 16,
        alignItems: 'center'
      },
      dateButton: {
        backgroundColor: '#ddd',
        borderRadius: 4,
        padding: 6,
        alignItems: 'center',
        width: 50,
        height: 30,
      },
      submitButtonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
      },
      label: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
    
      input: {
        marginBottom: 15,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ddd',
        fontSize: 15,
        color: '#444',
      },
})


export default styles;