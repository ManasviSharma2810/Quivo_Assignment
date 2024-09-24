import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import msg from '../../assets/images/msg.png';
import bell from '../../assets/images/bell.png';
import screw from '../../assets/images/screw.png';
import Activities from './components/activites';
import Frequently from './components/frequently';
import styles from './style';
import phoneModal from '../../assets/images/phoneModal.png';
import dotLock from '../../assets/images/dotLock.png';
import verifyImage from '../../assets/images/verifyImage.png';
import phone from '../../assets/images/phone.png';
import CustomButton from '../../components/CustomButton';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingModal: false,
     
    };
  }

  componentDidMount() {
    this.setState({startingModal: true});
  }

  closeModal = () => {
    this.setState({startingModal: false});
  };

  render() {
    const activityList = Array.from({length: 10});
    const {startingModal} = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.kevin}>Kevin</Text>
          </View>
          <View style={styles.msgbellStyle}>
            <Image source={msg} style={styles.bellIconStyle} />
            <Image source={bell} style={styles.bellIconStyle} />
          </View>
        </View>

        <View style={styles.cardView}>
          <View style={styles.cardContent}>
            <Image source={screw} style={styles.screw} />
            <View>
              <Text style={styles.text1}>Complete your account setup</Text>
              <Text style={styles.text2}>Tap to continue</Text>
            </View>
          </View>
        </View>

        <Text style={styles.heading}>FREQUENTLY USED</Text>
        <View style={styles.frequentlyContainer}>
          <Frequently title={'Calendar'} />
          <Frequently title={'Customer'} />
          <Frequently title={'Messages'} />
        </View>

        <Text style={styles.heading}>ACTIVITIES</Text>
        <ScrollView>
          <View style={styles.activitiesContainer}>
            {activityList.map((_, index) => (
              <Activities key={index} />
            ))}
          </View>
        </ScrollView>

        {startingModal && (
          <Modal
            transparent={true}
            visible={startingModal}
            animationType="slide"
            onRequestClose={this.closeModal}>
            <TouchableWithoutFeedback onPress={this.closeModal}>
              <View style={styles.modalContainer}>
                <TouchableWithoutFeedback>
                  <View style={styles.modalContent}>
                    <Image style={styles.lockStyle} source={phoneModal} />
                    <Text style={styles.modalTextLocked}>
                      Secure Your Account?
                    </Text>
                    <Text style={styles.modalText}>
                      Setup two-factor authentication to secure your account in
                      just two steps.
                    </Text>
                    <View style={styles.stepsContainer}>
                      <View style={{flexDirection: 'row'}}>
                        <Image style={styles.iconStyle} source={phone} />
                        <Text style={styles.stepText}>
                          Link your account with your phone number
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Image style={styles.iconStyle} source={dotLock} />
                        <Text style={styles.stepText}>
                          Enter the one-time passcode
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Image style={styles.iconStyle} source={verifyImage} />
                        <Text style={styles.stepText}>Secure your account</Text>
                      </View>
                    </View>
                    <CustomButton
                      title="Get Started"
                      onPress={() => {
                        this.setState({startingModal: false,});
                        this.props.navigation.navigate('PhoneNumber');
                      }}
                      buttonStyle={{backgroundColor: '#2A7BBB'}}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
      </View>
    );
  }
}
