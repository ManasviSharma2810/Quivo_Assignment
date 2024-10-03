import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {Images} from '../../assets';
import styles from './style';
import enums from '../../utils/enums';
import CustomButton from '../../components/CustomButton';
import TextInput from '../../new_component/textInput_custom';
import {Calendar} from 'react-native-calendars';
import PhoneInput from 'react-native-phone-number-input';
import ImagePicker from 'react-native-image-crop-picker';
import CustomModal from '../../components/CustomModal';

const Menu = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    name: '',
    userName: '',
    gender: '',
    email: '',
    countryCode: 'US',
    selectedDate: '',
  });
  // const [selectedDate, setSelectedDate] = useState('');
  const [gender, setGender] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [error, setError] = useState({});
  // const [isModalVisible, setIsModalVisible] = useState(true);

  const validateName = name => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const validateUsername = username => {
    const usernameRegex = /^[A-Za-z0-9]+$/;
    return usernameRegex.test(username);
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validNumber = number => {
    const numberRegex = /^\d+$/;
    return numberRegex.test(number) && number.length > 10;
  };
  const handleCalendarIconPress = () => {
    setShowCalendar(!showCalendar);
  };

  const onDayPress = day => {
    handleInput('selectedDate', day.dateString);
    setShowCalendar(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const selectGender = gender => {
    setGender(gender);
    setShowModal(false);
  };
  const handleInput = (key, value) => {
    let ErrorMsg = '';
    if (value !== '') {
      if (key === 'name' && !validateName(value)) {
        ErrorMsg = 'Name must contains only alphabets !';
      } else if (key === 'userName' && !validateUsername(value)) {
        ErrorMsg = 'Name must contains only alphabets !';
      } else if (key === 'email' && !validateEmail(value)) {
        ErrorMsg = 'Name must contains only alphabets !';
      } else if (key === 'phoneNumber' && !validNumber(value)) {
        ErrorMsg = 'Name must contains only alphabets !';
      }
    }
    let obj2 = {...error, [key]: ErrorMsg};
    setError(obj2);
    let Obj = {...formData, [key]: value};
    setFormData(Obj);
    console.log(obj2);
  };

  const takePhotoFromCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      setSelectedImage(image.path);
      setShowPhotoModal(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to capture image');
      console.log(error);
    }
  };

  const uploadFromLibrary = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setSelectedImage(image.path);
      setShowPhotoModal(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to select image from gallery');
      console.log(error);
    }
  };

  const genderOptions = ['Male', 'Female'];
  const handleUpdate = () => {
    let allValid = true;
    let newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = 'Name must contain only alphabets!';
      allValid = false;
    }

    if (!validateUsername(formData.userName)) {
      newErrors.userName = 'Username must contain only letters and numbers!';
      allValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email!';
      allValid = false;
    }

    if (!validNumber(formData.phoneNumber)) {
      newErrors.phoneNumber =
        'Please enter a valid phone number with more than 10 digits!';
      allValid = false;
    }

    if (!gender) {
      newErrors.gender = 'Please select a gender!';
      allValid = false;
    }

    setError(newErrors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backEdit}>
        <TouchableOpacity>
          <Image source={Images.menuArrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.editProfile}> Edit Profile </Text>
      </View>
      <View style={styles.innerViewStyle}>
        <View style={styles.girlView}>
          <Image
            source={selectedImage ? {uri: selectedImage} : Images.girl}
            style={styles.girlStyle}
          />
        </View>
        <View style={styles.textStyle}>
          <Text style={styles.profileText}>{enums.profilePic}</Text>
          <TouchableOpacity onPress={() => setShowPhotoModal(true)}>
            <Text style={styles.changeText}>{enums.changeProfileText}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="Name"
        input={[styles.input, error.name && {baseColor: ''}]}
        inputContainer={styles.inputContainer}
        onChangeText={value => handleInput('name', value)}
        value={formData.name}
        labelOffset={{x1: 173, y1: -17, x0: 180, y0: -10}}
        tintColor={'#ccc'}
        errorColor={'red'}
        error={error.name?true:false}
      />

      <Text style={styles.errorStyle}>{error.name && error.name}</Text>
      <TextInput
        placeholder="Username"
        input={styles.input}
        inputContainer={styles.inputContainer}
        onChangeText={value => handleInput('userName', value)}
        value={formData.userName}
        labelOffset={{x1: 173, y1: -17, x0: 180, y0: -10}}
        tintColor={'#ccc'}
        errorColor={'red'}
        error={error.userName?true:false}
      />
      <Text style={styles.errorStyle}>{error.userName && error.userName}</Text>
      <TouchableWithoutFeedback onPress={handleCalendarIconPress}>
        <View>
          <TextInput
            placeholder="Birthday"
            input={styles.input}
            inputContainer={styles.inputContainer}
            value={formData.selectedDate}
            labelOffset={{x1: 173, y1: -17, x0: 180, y0: -10}}
            tintColor={'grey'}
            disabled={true}
          />
          <Image
            source={Images.clndr}
            style={[
              styles.calendarIcon,
              {position: 'absolute', right: 25, top: 18},
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
      {showCalendar && (
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [formData.selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      )}
      <Text>{}</Text>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View>
          <TextInput
            placeholder="Gender"
            input={styles.input}
            inputContainer={styles.inputContainer}
            value={gender}
            tintColor={'grey'}
            labelOffset={{x1: 173, y1: -17, x0: 180, y0: -10}}
            disabled={true}
          />
          <Image
            source={Images.dropDown}
            style={[
              styles.dropIcon,
              {position: 'absolute', right: 25, top: 18},
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
      {showModal && (
        <View style={styles.dropdown}>
          <FlatList
            data={genderOptions}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => selectGender(item)}>
                <Text style={styles.genderOption}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <Text>{} </Text>
      <View style={styles.phoneinputStyle}>
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode={countryCode}
          layout="first"
          onChangeCountry={code => {
            handleInput('countryCode', code);
          }}
          onChangeText={value => {
            handleInput('phoneNumber', value);
          }}
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.textInputContainer}
          codeTextStyle={styles.codeText}
          textInputStyle={styles.phoneText}
        />
        <Text style={styles.errorStyle}>
          {error.phoneNumber && error.phoneNumber}
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            padding: 10,
            paddingTop: 17,
            paddingRight: 14,
          }}>
          <Text style={{color: '#EE28A9', fontWeight: '500', fontSize: 16}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholder="Email Id"
          input={styles.input}
          inputContainer={styles.inputContainer}
          onChangeText={value => handleInput('email', value)}
          value={formData.email}
          labelOffset={{x1: 173, y1: -17, x0: 180, y0: -10}}
          tintColor={'grey'}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            padding: 10,
            paddingTop: 17,
            paddingRight: 23,
          }}>
          <Text style={{color: '#EE28A9', fontWeight: '500', fontSize: 16}}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        title="Update"
        buttonStyle={{backgroundColor: '#000080'}}
        textStyle={{fontSize: 18}}
        onPress={handleUpdate}
      />
      <CustomModal
        transparent={true}
        visible={showPhotoModal}
        animationType="slide"
        onRequestClose={() => setShowPhotoModal(false)}
        onPress1={() => setShowPhotoModal(false)}
        onPress2={uploadFromLibrary}
        onPress3={takePhotoFromCamera}
      />
    </View>
  );
};
export default Menu;
