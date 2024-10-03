import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Images} from '../assets';

export class CustomModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Modal
          transparent={true}
          visible={this.props.visible}
          animationType="slide"
          onRequestClose={this.props.onRequestClose}>
          <TouchableWithoutFeedback onPress={this.props.onPress1}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContent1}>
                <Text style={styles.modalTitle1}>Profile Photo</Text>
                {/* <View style={styles.lineView}></View> */}
                <TouchableOpacity onPress={this.props.onPress2}>
                  <View style={styles.containerTop}>
                    <View style={styles.containerTop1}>
                      <Image source={Images.glry} style={styles.imgSize} />
                      <View style={styles.containerTop2}>
                        <Text style={styles.textName}>Upload from Gallery</Text>
                      </View>
                    </View>
                    <View style={styles.forwardContainer}>
                      <Image
                        source={Images.forward}
                        style={styles.imgForward}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.marginSpace}></View>
                <TouchableOpacity onPress={this.props.onPress3}>
                  <View style={styles.containerTop}>
                    <View style={styles.containerTop1}>
                      <Image source={Images.camera} style={styles.imgSize} />
                      <View style={styles.containerTop2}>
                        <Text style={styles.textName}>Use Camera</Text>
                      </View>
                    </View>
                    <View style={styles.forwardContainer}>
                      <Image
                        source={Images.forward}
                        style={styles.imgForward}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.marginSpace}></View>
                <TouchableOpacity>
                  <View style={styles.containerTop}>
                    <View style={styles.containerTop1}>
                      <Image source={Images.avatar} style={styles.imgSize} />
                      <View style={styles.containerTop2}>
                        <Text style={styles.textName}>Select an Avatar</Text>
                      </View>
                    </View>
                    <View style={styles.forwardContainer}>
                      <Image
                        source={Images.forward}
                        style={styles.imgForward}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  modalContent1: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxHeight: '50%',
  },

  modalTitle1: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    marginLeft: 15,
  },
 
  galleryview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 24,
    paddingHorizontal: 23,
    paddingVertical: 17,
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F9FA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F6F9FA',
  },
  marginSpace: {
    marginBottom: 12,
  },
  containerTop1: {
    flexDirection: 'row',
    margin: 20,
  },
  imgSize: {
    height: 53,
    width: 44,
  },
  forwardContainer: {
    justifyContent: 'center',
    marginRight: 20,
  },
  imgForward: {
    width: 6,
    height: 10,
  },
  containerTop2:{
    paddingLeft:19,
    paddingTop:10,
  }
});
export default CustomModal;
