import React, { Component } from 'react';
import { View, FlatList,Animated,SafeAreaView, StatusBar, Text, TouchableOpacity, TextInput } from 'react-native';
import { appColor, HeaderHeigth, fontBlack,blackColor, newColour, BlueColor, ratio, fontGrey, fontLight, appYellow, width, height } from '../constent';
import { Styles } from '../Styles';
import { connect } from 'react-redux'
import { fetchsavedata, fetchData } from '../redux/actions'
import SimpleToast from 'react-native-simple-toast';
//import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import {Loading} from '../common/Loading'


class Addcurrency extends Component {

    state = {

        localdata: [],
        length: '',
        cryptoname: 'Bitcoin',
        obj: {},
        search: '',
        loading:false,
        showshearch:false,
        json1:[],

    }

    async componentDidMount() {


        let url = "https://data.messari.io/api/v1/assets"
        let responce = await axios.get(url);
        let json = await responce.data
        let data = json
        console.log('student login data', json)
        await this.props.fetchData(data)
        let val = []
        val = await this.props.Data.data.slice(0, this.props.Data.data.length).map(ele => {
            let obj = {}
            obj.name = ele.name
            obj.symbol = ele.symbol
            obj.price_usd = ele.metrics.market_data.price_usd
            obj.percentage = ele.metrics.market_data.percent_change_usd_last_24_hours
            return obj
        })
        this.setState({ localdata: val })
    }
        _Addcryptocurrency = async () => {
        this.setState({loading:true})

        let searchResult = ''
        if (this.state.search == '') {
            SimpleToast.show('Enter the currency name')
            this.setState({loading:false})
            return;
        }
        else {
            searchResult = this.state.localdata.find(el => el.name == this.state.search)
            // checks if given key is available
            if (!searchResult) {
                SimpleToast.show('Invalid keyword');
                this.setState({loading:false})

                return;
            }
            const isElementAvailable  = this.props.SavedData.data.find(el => el.name == this.state.search)
            if (isElementAvailable) {
                SimpleToast.show('Currency already exists');
                this.setState({loading:false})

                return;
            }
            let data = searchResult
            this.state.localdata == '' ? SimpleToast.show('server error') : this.props.fetchsavedata(data) && this.props.navigation.navigate('Dashboard')
            this.setState({loading:false})

        }
    }
    _preditivesearch=(text)=>{
        
        if(this.state.search != ''){
        this.setState({showshearch:true})
      this.state.json1= this.props.Data.data.filter(el => el.name.includes(text))
    }else{
        this.setState({showshearch:false})

    }
}

    afterclick=()=>{


    }
    render() {

        console.log('adddata', this.props);
        console.log('adddata', this.state);

        return (
            <View>

<Loading isActive={this.state.loading } color={appColor} />

                <SafeAreaView style={{ backgroundColor: newColour }}>
                    <StatusBar backgroundColor={appColor} barStyle="light-content" />
                    <View style={{ flexDirection: 'row', height: HeaderHeigth, alignItems: 'center' }}>
                        <View></View>
                        <View style={{ flex: 1 }}>

                            <Text style={[Styles.H3, { marginStart: 50 * ratio }]}
                                onPress={() => this.props.navigation.goBack(null)}
                            >{"<< Back to list"}</Text>

                        </View>
                    </View>
                </SafeAreaView>

                <View style={{ marginTop: 180 * ratio }}>
                    <Text style={[Styles.H7, { marginStart: 30 * ratio }]}>
                        Add a CrypotoCurreny
                </Text>



                    <TextInput
                        style={{ borderWidth: 1, borderColor: fontLight, marginHorizontal: 30 * ratio, borderRadius: 5 * ratio, marginTop: 40 * ratio }}
                        placeholder='Use a name or ticket symbol'

                        onChangeText={(text) => this.setState({ search: text })}
                        value={this.state.search}
                        onKeyPress={() => this._preditivesearch(this.state.search)}

                        >

                    </TextInput>
                    {
                    this.state.showshearch &&
                    <Animated.View style={[Styles.ApplyShadow, { backgroundColor: 'rgba(255,255,255,0.9)', shadowColor: 'rgba(0,0,0,0.5)', top: 0, left: 0, right: 0, padding: 10 * ratio, opacity: this.AnimatedView, alignItems: 'flex-start',borderRadius:5*ratio, height: 100,marginStart:30*ratio,marginEnd:30*ratio }]}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.json1}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}
                                    onPress={() => this.setState({search:item.name})}
                                    >
                                    <Text></Text>
                                    <Text numberOfLines={2} style={[Styles.H5, { color: fontBlack, flex:1 }]}>{item.name}</Text>
                                    <Text></Text>
                                </TouchableOpacity>
                            }

                        />
                    </Animated.View>

                }
                    <View style={{ alignItems: 'flex-end', marginEnd: 30 * ratio }}>
                        <TouchableOpacity style={{ padding: 5, borderWidth: 1, backgroundColor: appYellow, width: width / 3, height: height / 15, alignItems: "center", marginVertical: 10, borderRadius: 5 * ratio }}

                            onPress={() => this._Addcryptocurrency()} >

                            <Text style={{ marginTop: 10 * ratio }}  >ADD</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}


const mapStateToProps = state => {

    return {
        Data: state.Datadash,
        SavedData:state.SaveData


    }
}
export default connect(mapStateToProps, { fetchsavedata, fetchData })(Addcurrency);