/*
 * @Author: Liam Xu
 * @Date: 2022-10-11 14:10:27
 * @LastEditTime: 2022-10-11 14:20:40
 * @LastEditors: Liam Xu
 * @FilePath: /react-native-keyboard-aware-scroll-view/rn-cli.config.js
 * @Description:
 */
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSourceExts() {
    return ['ts', 'tsx']
  },
}
