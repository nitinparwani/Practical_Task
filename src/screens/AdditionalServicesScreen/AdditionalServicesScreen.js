import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import RowContainer from '../../components/RowContainer';
import {moderateScale} from '../../components/scaling';
import ServiceCard from '../../components/ServiceCard';
import colors from '../../theme/colors';

export default function AdditionalServicesScreen({}) {
  const [footerHeight, setFooterHeight] = useState(0);
  var total_costing = 0.0; // TOTAL COSTINGS

  // ADDITIONAL SERVICE DATA
  const getAdditionalServices = useSelector(
    state => state?.ServicesReducer?.addition_services,
  );
  const renderItem = ({item}) => (
    // CUSTOM COMPONENT FOR CARD
    <ServiceCard
      mainTitle={item?.main_service_label}
      subTitle={item?.name}
      price={item?.price}
      image={item?.image}
    />
  );
  return (
    <SafeAreaView style={styles.safeareaViewStyle}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={getAdditionalServices}
        renderItem={renderItem}
        style={{marginBottom: footerHeight + 10}}
      />
      <View
        onLayout={event => {
          const {height} = event.nativeEvent.layout; // to get exact height of view
          setFooterHeight(height);
        }}
        style={styles.bottomContainer}>
        <ScrollView>
          {getAdditionalServices.map(item => {
            total_costing = Number(total_costing) + Number(item?.price);
            return <RowContainer label={item?.name} price={item?.price} />;
          })}
        </ScrollView>
        <View style={styles.horizontalLine} />

        {/* CUSTOM COMPONENT FOR SERVICE LABEL AND PRICE */}
        <RowContainer
          label={'Total Costings'}
          price={total_costing}
          labelColor={{color: colors.golden}}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeareaViewStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bottomContainer: {
    backgroundColor: colors.black,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: moderateScale(30),
    height: 200,
  },
  rowContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: moderateScale(20),
  },
  whiteLabelStyle: {color: colors.white},
  goldenLabeStyle: {
    color: colors.golden,
  },
  horizontalLine: {
    borderBottomColor: colors.greyish,
    borderBottomWidth: 1,
    paddingVertical: moderateScale(20),
  },
});
