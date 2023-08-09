import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  buttonTextStyle?: any;
  buttonStyle?: any;
  iconSource?: any; // Pass the image source as a prop
}

const CustomButton: React.FC<Props> = ({ buttonStyle, title, onPress, buttonTextStyle, iconSource }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...buttonStyle }} onPress={onPress}>
      <View style={styles.buttonContent}>
      {iconSource && (
        <View style={styles.iconContainer}>
          <Image source={iconSource} style={styles.icon} resizeMode="contain" />
        </View>
      )}
      <Text style={buttonTextStyle ? buttonTextStyle : styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%', // Add a width
    alignItems: 'center', // Center the items
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContent: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CustomButton;
