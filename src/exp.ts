import { LogUtils } from '@dw/d-utils'
const Exp1 = /\bhi\b/
// \b 匹配单词的开始或结束
LogUtils.logInfo(Exp1.test('hi'))
LogUtils.logInfo(Exp1.test('hi2'))
LogUtils.logError('', '--------------------------------------')
const Exp2 = /\bhi\b.\bLucy\b/
LogUtils.logInfo(Exp2.test('hi Lucy'))
LogUtils.logInfo(Exp2.test('hi aaa Lucy'))

// 匹配字符长度
// ^匹配你 要用来查找的字符串的开头，$匹配结尾。
LogUtils.logInfo(/^\d{5,12}$/.test('11111'))
LogUtils.logError('', '--------------------------------------')
// w 匹配一个单字字符（字母、数字或者下划线)等价于[A-Za-z0-9_]
LogUtils.logInfo(/\w/.test('aaaaa'))  // true
LogUtils.logInfo(/\w/.test('111'))  // true
LogUtils.logInfo(/\w/.test('z'))  // true
LogUtils.logInfo(/\w/.test('_'))  // true
// 匹配一个非单字字符。等价于[^A-Za-z0-9_]
LogUtils.logInfo(/\W/.test('_'))  // false
LogUtils.logError('', '--------------------------------------')
// 匹配字符串的开始用在[]括号里面表示排除,/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。
LogUtils.logInfo(/\W/.test('a&&'))  // true
LogUtils.logInfo(/^\W/.test('a&&'))  // false
LogUtils.logInfo(/^\W/.test('&a&&'))  // true
LogUtils.logError('', '--------------------------------------')
LogUtils.logInfo(/[^\w]/.test('a'))  // true   相当于   /\W/
LogUtils.logInfo(/[^\W]/.test('a'))  // true
// $ 匹配字符串的结束。例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。 QQ号必须为5位到12位数字时，可以使用：^\d{5,12}$
LogUtils.logInfo(/[^\W]$/.test('a_&'))  // false
LogUtils.logInfo(/[^\W]$/.test('a&_'))  // true

LogUtils.logError('', '--------------------------------------')
// s 代表任意空白符(换行符，制表符，空格)
LogUtils.logInfo(/\s/.test(' '))   // true


// d 	匹配一个数字,等价于[0-9]
LogUtils.logInfo(/\d/.test(' '))   // false
LogUtils.logInfo(/\d/.test('1111'))   // true
// D 匹配一个数字,等价于[^0-9]
LogUtils.logInfo(/\d/.test('1111'))   // false
LogUtils.logError('', '--------------------------------------')

// () 代表一个组 如果想要重复多个字符该怎么办？你可以用小括号来指定子表达式(也叫做分组)
LogUtils.logInfo(/(\d{1,3}\.){3}\d{1,3}/.test('222.222.222.1'))  // true
LogUtils.logInfo([/\w.+/.test('test.i.ng'), /[a-z.]+/.test('test.i.ng')])   // true
LogUtils.logInfo(/\w{3,5}/.test('___'))   // true
LogUtils.logInfo(/\d{3,5}/.test('___'))   // true
LogUtils.logError('', '--------------------------------------')
// i 忽略大小写
LogUtils.logInfo(/a/.test('aaaaaa'))   // true
LogUtils.logInfo(/a/.test('AAAAAA'))   // false
LogUtils.logInfo(/a/i.test('AAAAAA'))   // true
LogUtils.logError('', '--------------------------------------')
// g 执行全局匹配
LogUtils.logInfo(/a/.test('vvvvva'))   // true
const Exp3 = /a/g
const str = 'aaaaaaaa'
LogUtils.logInfo(Exp3.test(str))   // true
LogUtils.logWarning(Exp3.lastIndex)
LogUtils.logInfo(Exp3.test(str))   // true
LogUtils.logWarning(Exp3.lastIndex)
LogUtils.logInfo(Exp3.test(str))   // true
LogUtils.logWarning(Exp3.lastIndex)
LogUtils.logInfo(Exp3.test(str))   // true
LogUtils.logWarning(Exp3.lastIndex)
LogUtils.logError('', '--------------------------------------')
// 
const str1 = 'daiwei'
LogUtils.logInfo(/d(?=a)/.test(str1))
LogUtils.logInfo(/d(?=i|a)/.test(str1))

const num = '021-121121'
LogUtils.logInfo(/\(?0\d{2}[)-]?\d{6}/.test(num))

// 6-12 数字 字母 下划线
const pwd = 'Daiwei__12'
LogUtils.logInfo(/^\w{6,12}$/.test(pwd))
LogUtils.logError('', '--------------------------------------')
const str2 = 'Hi RegExp I love you so much Hi Hi hi'
const Exp4 = /\bhi\b/gi
const Exp5 = /\bhi\b.*\bmuch\b/gi
LogUtils.logInfo(Exp4.test(str2))
LogUtils.logInfo(Exp4.lastIndex)
LogUtils.logInfo(Exp4.test(str2))
LogUtils.logInfo(Exp4.lastIndex)
LogUtils.logInfo(Exp4.test(str2))
LogUtils.logInfo(Exp4.lastIndex)
LogUtils.logInfo(Exp4.test(str2))
LogUtils.logInfo(Exp4.lastIndex)
LogUtils.logInfo(str2.match(Exp4))
LogUtils.logInfo(Exp5.test(str2))
LogUtils.logInfo(str2.match(Exp5))
LogUtils.logError('', '--------------------------------------')

// 匹配手机号 0123-88752314
const Exp6 = /^0\d{3}-\d{8}$/g
LogUtils.logInfo(Exp6.test('0123-45678910'))
LogUtils.logInfo(Exp6.test('0123-456789101'))
LogUtils.logInfo(Exp6.test('10123-456789101'))
LogUtils.logInfo('0123-45678910'.match(Exp6))
LogUtils.logInfo('0123-456789101'.match(Exp6))
LogUtils.logInfo('10123-456789101'.match(Exp6))
LogUtils.logError('', '--------------------------------------')

// 清除字符串首尾表达式
const str3 = '    this is space    '
const Exp7 = /(^\s*) | (\s*$)/g
// 去除所有空格
const Exp8 = /(\s)/g
LogUtils.logInfo(str3)
LogUtils.logInfo(str3.replace(Exp7, ''))
LogUtils.logInfo(str3.replace(Exp8, ''))
LogUtils.logError('', '--------------------------------------')

// 匹配一个邮箱。  185098535@qq.com
const Exp9 = /\S*@\S*\.\S*/
const str4 = '18509535@qq.com'
LogUtils.logInfo(Exp9.test(str4))
LogUtils.logError('', '--------------------------------------')

// 练习只能是汉字
const Exp10 = /^[\u4e00-\u9fa5]*$/g
const str5 = '戴伟'
LogUtils.logInfo(Exp10.test(str5))
LogUtils.logInfo('JavaScript'.search(/a(.)a/))

