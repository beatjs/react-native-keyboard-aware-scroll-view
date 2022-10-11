/*
 * @Author: Liam Xu
 * @Date: 2022-10-11 15:20:43
 * @LastEditTime: 2022-10-11 15:21:02
 * @LastEditors: Liam Xu
 * @FilePath: /react-native-keyboard-aware-scroll-view/lib/KeyboardAwareFlatList.js
 * @Description:
 */
/* @flow */

import { FlatList } from 'react-native-gesture-handler'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(FlatList)
