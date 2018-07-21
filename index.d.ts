declare module 'react-native-equalizer' {
    import React from 'react'
  
    import {
      View,
      Text,
      Slider
    } from 'react-native'
  
    interface Equalizer {
      /**
       * Initial value of the slider. The value should be between minimumValue
       * and maximumValue, which default to 0 and 1 respectively.
       * Default value is 0.
       *
       * *This is not a controlled component*, e.g. if you don't update
       * the value, the component won't be reset to its inital value.
       */
      data?: object
    }
  
    const Equalizer : ComponentClass<EqualizerProps>
  
    export default Equalizer
}