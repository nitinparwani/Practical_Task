import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {horizontalScale, moderateScale, verticalScale} from './scaling';
import colors from '../theme/colors';
import icons from '../theme/icons';

export default function ServiceCard(props) {
  const {
    mainTitle = '',
    subTitle = '',
    price = '',
    image = 'https://picsum.photos/200'
  } = props;
  return (
    <View style={styles.mainContainerStyle}>
      <Text style={styles.mainServiceLabelStyle}>{mainTitle}</Text>
      <View style={styles.subContainerStyle}>
        <Image
          source={{uri: image}}
          style={styles.photoStyle}
        />
        <View style={styles.subServiceContainerStyle}>
          <Text style={styles.subServiceLabelStyle}>{subTitle}</Text>
          <Text
            style={styles.subServicePriceLabelStyle}>{`Kr ${price},-`}</Text>
        </View>
        <Image
          resizeMode="contain"
          source={icons.ic_info}
          style={styles.infoIconStyle}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainerStyle: {
    paddingHorizontal: moderateScale(20),
  },
  mainServiceLabelStyle: {
    marginVertical: moderateScale(20),
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: colors.black,
  },
  subContainerStyle: {
    borderWidth: 1,
    borderColor: colors.grey,
    flexDirection: 'row',
    padding: moderateScale(25),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    flex: 1,
  },
  photoStyle: {
    height: verticalScale(120),
    width: horizontalScale(160),
    borderRadius: moderateScale(10),
  },
  subServiceContainerStyle: {paddingLeft: moderateScale(15), flex: 1},
  subServiceLabelStyle: {fontWeight: '600', color: colors.black},
  subServicePriceLabelStyle: {paddingTop: moderateScale(10)},
  infoIconStyle: {
    height: 18,
    width: 18,
    borderRadius: moderateScale(10),
    tintColor: colors.greyish,
  },
});
