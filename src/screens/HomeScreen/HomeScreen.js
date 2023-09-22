import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Loader from '../../components/Loader';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../components/scaling';
import TopTabBarNavigator from '../../navigation/TopTabBarNavigator';
import {getJsonData} from '../../network/ApiService';
import {ServiceAction} from '../../redux/actions/ServiceAction';
import colors from '../../theme/colors';
import icons from '../../theme/icons';

export default function HomeScreen() {
  const[loading,setLoading] = useState(false)
  const dispatch = useDispatch();
  var purchased_services = [];
  var addition_services = [];
  const getJson = () => {
    setLoading(true)
    getJsonData().then(resp => {
      setLoading(false)
      let services = resp?.data?.purchased_services;
      for (let index = 0; index < services.length; index++) {
        const main_service_label = services[index]?.name;
        const purchased_office_services =
          services[index]?.purchased_office_template?.purchased_office_services;
        for (let j = 0; j < purchased_office_services.length; j++) {
          const element = purchased_office_services[j];
          if (element?.service_selected == null) {
            var main_element = {
              ...element,
              main_service_label: main_service_label,
            };
            addition_services.push(main_element);
          } else {
            var main_element = {
              ...element,
              main_service_label: main_service_label,
            };
            purchased_services.push(main_element);
          }
        }
      }
      var data = {
        purchased_services: purchased_services,
        addition_services: addition_services,
      };
      dispatch(ServiceAction(data));
    });
  };
  useEffect(() => {
    getJson(); // Api Call 
  }, []);
  return (
    <SafeAreaView style={styles.safeareaViewStyle}>
      <Loader loading={loading}/>
      <View style={styles.mainContiner}>
        <Image source={icons.ic_menu} style={styles.menuIconStyle} />
        <Text style={styles.serviceLabelStyle}>Services</Text>
      </View>
      <TopTabBarNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaViewStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(15),
  },
  menuIconStyle: {
    height: verticalScale(80),
    width: horizontalScale(100),
  },
  serviceLabelStyle: {
    marginLeft: moderateScale(20),
    fontSize: moderateScale(30),
    fontWeight: '600',
    color: colors.black,
  },
});
