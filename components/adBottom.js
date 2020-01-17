import React from 'react';
import { View } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob'
export default class AdBottom extends React.Component {
  
    bannerError(e){
        alert(e);
    }

    render() {
    return (
        // <View  style={{  position:'absolute', bottom:0 }}>
       <AdMobBanner
       bannerSize="smartBannerPortrait"
       adUnitID="ca-app-pub-3940256099942544/6300978111"  //this is sample test id ,change this
       testDeviceId="EMULATOR"
       onDidFailToReceiveAdWithError={ (e) => this.bannerError(e)}
     />
      //  </View>
    );
  }
}