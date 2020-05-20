import React from 'react'
import {Text, View } from 'react-native'
import PropTypes from 'prop-types'


const Ratings = props => {

    return (
        <View >
            <Text style={{ flex:1 }}> {props.Source} {props.Value}</Text>
        </View>
    )
}

Ratings.propTypes = {
    Source: PropTypes.string,
    Value: PropTypes.string,
}

export default Ratings