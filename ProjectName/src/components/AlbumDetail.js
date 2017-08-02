import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './card'

const AlbumDetail = (props) => (
        <Card>
            <Text>{props.albumData.title}</Text>
        </Card>

    );

export default AlbumDetail;
