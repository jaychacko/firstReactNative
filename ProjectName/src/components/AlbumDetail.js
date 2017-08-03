import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './card'
import CardSection from './cardSection'
const AlbumDetail = (props) => (
        <Card>
            <CardSection>
            <Text>{props.albumData.title}</Text>
            </CardSection>
        </Card>

    );

export default AlbumDetail;
