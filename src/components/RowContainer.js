import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from './scaling';
import colors from '../theme/colors';

export default function RowContainer(props) {
  const {labelColor = {color:colors.white}, label = '', price = ''} = props;
  return (
    <View style={styles.rowContainerStyle}>
      <Text style={labelColor}>{label}</Text>
      <Text style={labelColor}>{`Kr ${price},-`}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  rowContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: moderateScale(20),
  },
});
