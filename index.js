import { Dimensions, Platform, StatusBar } from 'react-native';

export function isIphoneX() {
    const dimen = Dimensions.get('window');
    if(Platform.OS !== 'ios' ||
    Platform.isPad &&
    Platform.isTVOS ) {
        return false;
    }
    if (dimen.height === 780 || dimen.width === 780) {
        return true;
    }
    if (dimen.height === 812 || dimen.width === 812) {
        return true;
    }

    if (dimen.height === 844 || dimen.width === 844) {
        return true;
    }

    if (dimen.height === 896 || dimen.width === 896) {
        return true;
    }

    if (dimen.height === 926 || dimen.width === 926) {
        return true;
    }

    return false;
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}

export function getStatusBarHeight(safe) {
    return Platform.select({
        ios: ifIphoneX(safe ? 44 : 30, 20),
        android: StatusBar.currentHeight,
        default: 0
    });
}

export function getBottomSpace() {
    return isIphoneX() ? 34 : 0;
}
