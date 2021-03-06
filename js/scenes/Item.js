import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { defaultTextStyle } from '../../config';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.navigator = this.props.navigator;
    this.onMapPress = this.onMapPress.bind(this);
    this.onBackPress = this.onBackPress.bind(this);
  }

  onMapPress() {
    this.navigator.push({ id: 'map' });
  }

  onBackPress() {
    this.navigator.pop();
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Item</Text>
        <TouchableOpacity
          onPress={this.onMapPress}>
          <Text style={styles.text}>Go to Map scene</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onBackPress}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Item.propTypes = {
  navigator: React.PropTypes.object,
};

const styles = StyleSheet.create({
  header: {
    ...defaultTextStyle,
    fontSize: 22,
    textAlign: 'center',
  },

  text: {
    ...defaultTextStyle,
  },
});
