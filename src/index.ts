import './style.less';
import './exp'
import LogUtils from '@dw/d-utils/lib/logUtils';
import * as DeviceUtils from '@dw/d-utils/lib/deviceUtils';
LogUtils.logInfo('WEBPACK-TPL', 'HELLO')
DeviceUtils.checkLayoutOrientation()