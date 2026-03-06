import { Dimensions, Platform } from 'react-native';
// export const BaseUrl = 'http://coreb2cmrtapiv9.retaxis.com/buyer.svc/'
// export const BaseUrl = 'http://hokosokomobileapi.cstechns.com/buyer.svc/'
export const BaseUrl = 'http://mrtapi.hokosoko.com/buyer.svc/'
export const BaseUrlretaxis = 'http://coreb2cmrtapiv9.retaxis.com/buyer.svc/'
// export const RazorPayUrl = 'http://hokosokov3.cstechns.com/PaymentgatewayMobile/Razorpay/PaymentMoblie.aspx?orderid='
export const RazorPayUrl = 'http://hokosoko.com/PaymentgatewayMobile/Razorpay/PaymentMoblie.aspx?orderid='

export const PlatformIOS = Platform.OS === 'ios' ? 'Ios' : 'Android'
export const AppVersion = Platform.OS === 'ios' ? '1.1.29(2)' : '1.0.37';

export const { height, width } = Dimensions.get('window')// iPhoneX {height: 812, width: 375}
export const heightRatio = height / 812
export const widthRatio = width / 375
export const ratio = width / 375 // 1 - (1.779 - (height / width).toFixed(3))
export const HeaderHeigth = 70
export const FooterHeigth = 56



export const appColor = '#0E1130'
export const newColour = '#eee'
export const appBackColor = '#f3f5f9'
export const appYellow = '#fe9703'
export const borderColor = '#E1E1E1'
export const borderColorGray = '#EEEEEE'
export const whiteColor = '#FFFFFF'
export const redColor = '#FF0100'
export const blackColor = '#000000'
export const OrangeColor = '#FE9003'
export const BlueColor = '#2874f0'
export const greenColor='#008000'	
export const appheadColour = '#395774'
export const textColorLight = '#959595'
export const textColor = '#555555'
export const textColorDark = '#000000'

export const fontBlack = '#000000'
export const fontGrey = '#707070'
export const fontLight = '#CCCCCC'
export const fontOrange = '#FE9003'

export const iconSize = {
    M: 20 * ratio,
    L:25* ratio
}

export const Phone_N_Whatsapp = '+919084427940'
export const Privacy_Policy = 'http://www.hokosoko.com/content/privacy-policy'
export const About_Us = 'http://hokosoko.com/content/about-us'
export const Retun_Policy = 'http://hokosoko.com/content/return'
export const Shipping_Delivery_policy="http://hokosoko.com/content/shipping"


//social media


export const Insta='https://www.instagram.com/hoko_soko'
export const Facebook= 'https://www.facebook.com/HokosokoOnline'
export const Twitter = 'https://twitter.com/Hokosoko'
export const Youtube ='https://www.youtube.com/channel/UC4vikgIiO47zFVWOioHVk8A'
export const In= 'https://www.linkedin.com/in/hoko-soko'

// export const Insta='hoko_soko'
// export const Facebook= 'HokosokoOnline'
// export const Twitter = 'Hokosoko'
// export const Youtube ='channel/UC4vikgIiO47zFVWOioHVk8A'
// export const In= 'hoko-soko'
//FUNCTION------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const stringTo = (text, type) => {
    switch (type) {
        case 'uc':
            return text.toUpperCase()
        case 'lc':
            return text.toLowerCase()
        case 'fc':
            let arr = text.split(' ')
            arr = arr.map(i => i.charAt(0).toUpperCase() + i.slice(1))
            return arr.join(' ')
        default:
            return text
    }
}
export const EncodeSpecialChar = (_string) => {
    // debugger;
    _string = _string.replace(new RegExp("\"", 'g'), "m1g");
    _string = _string.replace(new RegExp("/", 'g'), "m2g");
    _string = _string.replace(/[ø]/g, "m3g");
    _string = _string.replace(/[(]/g, "m4g");
    _string = _string.replace(/[)]/g, "m5g");
    _string = _string.replace(/[.]/g, "m6g");
    _string = _string.replace(/[+]/g, "m7g");
    _string = _string.replace(/[*]/g, "m8g");
    _string = _string.replace(/[#]/g, "m9g");
    _string = _string.replace(/[&]/g, "m10g");
    _string = _string.replace(/[%]/g, "m11g");
    _string = _string.replace(/[₹]/g, "m12g");
    _string = _string.replace(/[$]/g, "m13g");
    _string = _string.replace(/[±]/g, "m14g");
    _string = _string.replace(/[']/g, "m15g");
    _string = _string.replace(/[@]/g, "m16g");
    _string = _string.replace(/[~]/g, "m17g");
    _string = _string.replace(/[!]/g, "m18g");
    _string = _string.replace(/[_]/g, "m19g");
    _string = _string.replace(/[<]/g, "m20g");
    _string = _string.replace(/[>]/g, "m21g");
    _string = _string.replace(/[?]/g, "m22g");
    _string = _string.replace(/[\\]/g, "m23g");
    _string = _string.replace(/[|]/g, "m24g");
    _string = _string.replace(/[[]/g, "m25g");
    _string = _string.replace(/\]/g, "m26g");
    _string = _string.replace(/[{]/g, "m27g");
    _string = _string.replace(/[}]/g, "m28g");
    _string = _string.replace(/[:]/g, "m29g");
    _string = _string.replace(/[;]/g, "m30g");
    _string = _string.replace(/\^/g, "m31g");
    _string = _string.replace(/[=]/g, "m32g");
    _string = _string.replace(/[€]/g, "m33g");
    //_string = _string.replace(/[ ]/g, "m34g");
    _string = _string.replace(/[,]/g, "m35g");
    _string = _string.replace(/[`]/g, "m36g");

    return _string;
}
export const DecodeSpecialChar = (_string) => {
    //debugger;
    if (_string) {
        _string = _string.replace(new RegExp("m1g", 'gi'), "\"");
        _string = _string.replace(new RegExp("m2g", 'gi'), "/");
        _string = _string.replace(new RegExp("m3g", 'gi'), "ø");
        _string = _string.replace(new RegExp("m4g", 'gi'), "(");
        _string = _string.replace(new RegExp("m5g", 'gi'), ")");
        _string = _string.replace(new RegExp("m6g", 'gi'), ".");
        _string = _string.replace(new RegExp("m7g", 'gi'), "+");
        _string = _string.replace(new RegExp("m8g", 'gi'), "*");
        _string = _string.replace(new RegExp("m9g", 'gi'), "#");
        _string = _string.replace(new RegExp("m10g", 'gi'), "&");
        _string = _string.replace(new RegExp("m11g", 'gi'), "%");
        _string = _string.replace(new RegExp("m12g", 'gi'), "₹");
        _string = _string.replace(new RegExp("m13g", 'gi'), "$");
        _string = _string.replace(new RegExp("m14g", 'gi'), "±");
        _string = _string.replace(new RegExp("m15g", 'gi'), "'");
        _string = _string.replace(new RegExp("m16g", 'gi'), "@");
        _string = _string.replace(new RegExp("m17g", 'gi'), "~");
        _string = _string.replace(new RegExp("m18g", 'gi'), "!");
        _string = _string.replace(new RegExp("m19g", 'gi'), "_");
        _string = _string.replace(new RegExp("m20g", 'gi'), "<");
        _string = _string.replace(new RegExp("m21g", 'gi'), ">");
        _string = _string.replace(new RegExp("m22g", 'gi'), "?");
        _string = _string.replace(new RegExp("m23g", 'gi'), "\\");
        _string = _string.replace(new RegExp("m24g", 'gi'), "|");
        _string = _string.replace(new RegExp("m25g", 'gi'), "[");
        _string = _string.replace(new RegExp("m26g", 'gi'), "]");
        _string = _string.replace(new RegExp("m27g", 'gi'), "{");
        _string = _string.replace(new RegExp("m28g", 'gi'), "}");
        _string = _string.replace(new RegExp("m29g", 'gi'), ":");
        _string = _string.replace(new RegExp("m30g", 'gi'), ";");
        _string = _string.replace(new RegExp("m31g", 'gi'), "^");
        _string = _string.replace(new RegExp("m32g", 'gi'), "=");
        _string = _string.replace(new RegExp("m33g", 'gi'), "€");
        //_string = _string.replace(new RegExp("m34g", 'gi'), " ");
        _string = _string.replace(new RegExp("m35g", 'gi'), ",");
        _string = _string.replace(new RegExp("m36g", 'gi'), "`");
    }
    return _string;
}