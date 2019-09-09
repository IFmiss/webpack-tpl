import './style.less';
import './exp'
import LogUtils from 'd-utils/lib/logUtils';
import * as DeviceUtils from 'd-utils/lib/deviceUtils';
LogUtils.logInfo('WEBPACK-TPL', 'HELLO')
DeviceUtils.checkLayoutOrientation()