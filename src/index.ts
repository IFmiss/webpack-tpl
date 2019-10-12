import '@/style.less';

import { calcStringLength, copyCode } from 'd-utils/lib/genericUtils'
import { sleep } from 'd-utils/lib/promiseUtils'
import { parseUrl } from 'd-utils/lib/urlUtils'
import { isEmptyStr } from 'd-utils/lib/expUtils'
import LogUtils from 'd-utils/lib/logUtils'
import XingNeng from 'd-utils/lib/performanceUtils'

XingNeng.logger()
isEmptyStr('123123')
LogUtils.logInfo(calcStringLength('1111'))
calcStringLength('1111')

