/*
 * @Author: Liam Xu
 * @Date: 2022-10-11 15:20:43
 * @LastEditTime: 2022-10-11 15:21:48
 * @LastEditors: Liam Xu
 * @FilePath: /react-native-keyboard-aware-scroll-view/lib/KeyboardAwareSectionList.js
 * @Description:
 */
/* @flow */

import { SectionList } from 'react-native'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(SectionList)
