import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './Button';

const AlbumDetail = ({ albumData }) => {
    const { title, artist, thumbnail_image, image, url } = albumData;
    const { thumbnailStyle, imageStyle, headerCotentStyles, headerTextStyle, thumbnailContainerStyle } = styles;


return (


    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={headerCotentStyles}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
            </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => { Linking.openURL(url) }} >
              Buy now
          </Button>
        </CardSection>
    </Card>

    );
};
     const styles = {
         headerCotentStyles: {
             flexDirection: 'column',
             justifyContent: 'space-around'
         },
            thumbnailStyle: {
                height: 50,
                width: 50
            },
            thumbnailContainerStyle: {
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                marginRight: 10
            },
            headerTextStyle: {
                fontSize: 18

            },
            imageStyle: {
                height: 300,
                flex: 1,
                width: null
            }
         };

export default AlbumDetail;
