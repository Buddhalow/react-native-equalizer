import React from 'react'
import PropTypes from 'prop-types'

import { Slider, View, Text } from 'react-native'

export default class Equalizer extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        onChange: PropTypes.func,
        maximumValue: PropTypes.number
    }
    setValue(k, v) {
        let sum = 0
        let data = this.state.data
        data[k].value = v
        this.state.data[k].realValue = (v / 100) * this.state.maximumValue
        let obj = data[k] 
        for (let key of Object.keys(data)) {
            let obj2 = data[key]
            if (key != k) {
                sum += obj2.value
            }
        }
        if (sum + obj.value != 100) {
            let count = Object.keys(data).length
            let difference = 150 - (sum + obj.value)
            let fragment =  difference / (count)   
            for (let key of Object.keys(data)) {
                let obj2 = data[key]
                
                if (key != k) {
                    obj2.value += fragment
                    data[key].realValue = (obj2.value / 100)  * this.state.maximumValue
                }
            }
        }
        this.setState({data: data})
        if (this.props.onChange instanceof Function) {
            this.props.onChange(data)
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            data: {
            },
            maximumValue: this.props.maximumValue
        }
        this.state.data = this.props.data
        this.setValue = this.setValue.bind(this)
    }
    render() {
        return (
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
                {Object.keys(this.state.data).map((k, i) => (
                    <View key={i} style={{ justifyContent: 'center', alignItems: 'stretch'}}>
                        <Slider  value={this.state.data[k].value} onValueChange={(v) => { this.setValue(k, v) }} maximumValue={100} minimumValue={0} />
                        <Text style={{textAlign: 'center'}}>{(this.props.data[k].label || k) + ' ' + Math.floor(this.state.data[k].realValue, 2) + ' (' + Math.floor(this.state.data[k].value, 2) + '%)' }</Text>
                    </View>
                ))} 
            </View>
        )
    }
}