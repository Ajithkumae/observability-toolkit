import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { appColor, HeaderHeigth, blackColor, newColour, appheadColour, ratio, greenColor, redColor, fontGrey } from '../constent';
import { fetchData } from '../redux/actions'
import { Styles } from '../Styles';
import axios from 'axios'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import { Loading } from '../common/Loading'

class Dashboard extends Component {

    state = {

        CrypotoCurrenydata: [],
        loading: false,
    }





    componentWillMount() {

        console.log("will mount", this.props.SavedData.data);

        if (this.props.SavedData.data != '') {
            this.state.CrypotoCurrenydata.push(this.props.SavedData.data)

            this.setState({ loading: false })

            //    AsyncStorage.setItem('user', JSON.stringify(this.myData))


        }
    }

    //  UNSAFE_componentWillUpdate (nextProp){

    //     console.log("will update", this.props.SavedData.data, nextProp );

    //     if (this.props.SavedData.data !=''){
    //        this.state.CrypotoCurrenydata.push(this.props.SavedData.data)     

    //     }
    // }

    renderItem({ item }) {


        return (

            <View style={{ margin: 10 * ratio, borderBottomWidth: 1, borderColor: fontGrey }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 * ratio }}>

                    <View  >
                        <Image source={require('../resources/image.png')} style={{ height: 50 * ratio, width: 50 * ratio, borderRadius: 25 * ratio, borderWidth: 1, marginEnd: 25 * ratio }} />

                    </View>


                    <View style={{ flex: 1 }}>
                        <Text style={[Styles.Text14, { paddingTop: 5 * ratio }]} >{item.name}</Text>

                        <Text style={[Styles.Text14, { paddingTop: 5 * ratio }]} >{item.symbol}</Text>
                    </View>

                    <View >
                        <Text style={{ justifyContent: 'flex-end', paddingEnd: 10 * ratio, paddingTop: 5 * ratio }}>$ {parseFloat(item.price_usd).toFixed(2)}</Text>

                        {
                            item.percentage < 0 ?
                                <Text style={{ justifyContent: 'flex-end', paddingEnd: 10 * ratio, color: redColor, paddingTop: 5 * ratio }}> v {parseFloat(item.percentage).toFixed(2)}</Text>
                                :
                                <Text style={{ justifyContent: 'flex-end', paddingEnd: 10 * ratio, color: greenColor, paddingTop: 5 * ratio }}> ^ {parseFloat(item.percentage).toFixed(2)}</Text>
                        }

                    </View>
                </View>
            </View>

        )

    }





    render() {

        console.log('props', this.props);
        console.log('props', this.state);


        // console.log('asyncdata',AsyncStorage.getItem('Cryptodata'))
        return (
            <View>


                <SafeAreaView style={{ backgroundColor: appheadColour }}>
                    <StatusBar backgroundColor={appColor} barStyle="light-content" />
                    <View style={{ flexDirection: 'row', height: HeaderHeigth, alignItems: 'center' }}>
                        <View></View>
                        <View style={{ flex: 1 }}><Text style={[Styles.H1, { marginStart: 50 * ratio }]}>CryptoTracker Pro</Text></View>
                        <View >

                            <Image source={require('../resources/image.png')} style={{ height: 50 * ratio, width: 50 * ratio, borderRadius: 25 * ratio, borderWidth: 1, marginEnd: 25 * ratio }} />

                        </View>
                    </View>
                </SafeAreaView>
                <View style={{ margin: 15 * ratio }} />



                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.props.SavedData.data}



                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}




                />



                <TouchableOpacity style={{ alignItems: "center", marginTop: 80 * ratio }}
                    onPress={() => this.props.navigation.navigate('Addcurrency')}>

                    <Text>+ Add CrypotoCurreny</Text>

                </TouchableOpacity>

            </View>
        );
    }
}

const mapStateToProps = state => {

    return {
        Data: state.Datadash,
        SavedData: state.SaveData
    }
}

export default connect(mapStateToProps, { fetchData })(Dashboard);