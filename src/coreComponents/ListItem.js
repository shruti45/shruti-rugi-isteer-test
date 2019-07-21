import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/ListItemStyles";
import PropTypes from "prop-types";
import Star from 'react-native-star-view';
import Header from "../coreComponents/Header";
import Button from "../coreComponents/Button";

const ListItem = props => {
  ViewDirection = () => {
    const { onPress } = props;
    onPress && onPress();
  };

  let placeType="";
  console.log("props.types ",props.type )
  for(let i=0;i<=props.type.length;i++){
    if(i == 0){
      placeType="bar"
    }else if(i == "1"){
      placeType="restaurant"
    }else if(i == "2"){
      placeType="food"
    }else if(i == "3"){
      placeType="point_of_interest"
    }else if(i == "4"){
      placeType="establishment"
    }
  }
 


 

  return (
    <View style={styles.container} >
      <View style={styles.contentHolder}>
      <View style={styles.imageHolder}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.titleHolder}>
        <Text n ellipsizeMode={"tail"} style={styles.title}>
          {props.title}
        </Text>
        <Text  style={styles.title}>{placeType}</Text>
        <Star score={props.rating} style={styles.starStyle} />
        <Button
          container={styles.buttonContainer}
          textStyle={styles.buttonLabel}
          onPress={this.ViewDirection}
          title="View Map"
        />
      </View>
      </View>
      
     
    </View>
  );
};
export default ListItem;
ListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func
};
