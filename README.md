# react-native-equalizer

A component that emulates an equalizer.

## Installation

````sh
    npm install react-native-equalizer
````

## Usage

From the example

````javascript
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    import Equalizer from 'react-native-equalizer'

    export default class App extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Equalizer maximumValue={100} data={{a: {value: 0, label: 'Bass'}, b: {value:50, label: 'Trible'}, c: {value: 50, label: 'Test'}}} />
        </View>
        );
    }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
        },
    });
````

## Author

Alexander Forselius <alexander.forselius@buddhalow.com>

## License

MIT
