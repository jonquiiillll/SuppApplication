import React, { useEffect, useState, useRef, useCallback } from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, View, Dimensions, Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';


const WaitingScreen = ({ navigation }) => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef();
  let intervalId = null;

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
    };
  });

  const onSlideChange = useCallback(() => {
    const newIndex =
      selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: dimension.width * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 5000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, [onSlideChange]);

  const onTouchStart = () => {
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    startInterval();
  };

  const carouselImages = [
    { url: require('../assets/history1.png') },
    { url: require('../assets/history2.png')},
    { url: require('../assets/history3.png') }
  ];

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };

  return (
    <View>
      <ViewHeader>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <ViewNotification>
            <Image source={require('../assets/backk.png')} style={{ height: 17, width: 10 }} />
          </ViewNotification>
        </TouchableOpacity>
        <TextGreeting>Поиск собеседника</TextGreeting>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <ViewNotification>
            <Image source={require('../assets/ques.png')} style={{ height: 21, width: 12 }} />
          </ViewNotification>
        </TouchableOpacity>
      </ViewHeader>

      <Container >
        <ScrollView
          horizontal
          ref={scrollRef}
          onMomentumScrollEnd={setIndex}
          showsHorizontalScrollIndicator={false}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          pagingEnabled
        >
          {carouselImages.map((value, key) => (
            <Image
              source={ `${value.url}` }
              style={styles.absolute}
              // style={{width: dimension?.width, height: 844, zIndex: 10, marginTop: -50, resizeMode: 'cover'}}
              PlaceholderContent={<ActivityIndicator />}
            />
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
          }}>
          <ViewProgress>
            {carouselImages.map((val, key) => (
              <View
                key={key}
                style={key === selectedIndex ? { width: 110, height: 4, borderRadius: 20, margin: 8, backgroundColor: '#757575' } : { width: 110, borderRadius: 20, margin: 8, height: 4, backgroundColor: 'white' }}>

              </View>
            ))}
          </ViewProgress>
        </View>
      </Container>
      <ViewProgressBar>
        <ViewProgressLine>
          <Progress>
          <TextProgress>Ищем собеседников...</TextProgress>
          </Progress>
        </ViewProgressLine>
      </ViewProgressBar>
    </View>
  );
};



export default WaitingScreen;

const ViewHeader = styled.View`
width: 95%;
margin: 10px;
margin-top: 60px;
padding: 10px;
position: absolute,
z-index: 10,
align-items: center;
justify-content: space-between;
background: #FFFFFF;
display:flex;
border-radius: 30px;
flex-direction: row;
`
const ViewProgressBar = styled.View`
width: 100%;
height: 100px;
margin-top: 620px;
bottom: 0px;
/* position: absolute; */
z-index: 10;
align-items: center;
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
border-radius: 20px 20px 0px 0px;
`
const TextGreeting = styled.Text`
font-size: 19px;
font-weight: 500;
display:flex;
color: #444444;
`
const TextProgress = styled.Text`
font-size: 14px;
font-weight: 400;
display:flex;
color: white;
`
const ViewNotification = styled.View`
width: 37px;
height: 37px;
background: #444444;
border-radius: 30px;
align-items: center;
justify-content: center;
`
const Progress = styled.View`
width: 55%;
height: 100%;
background: #E55A39;
border-radius: 33px;
padding-left: 12px;
justify-content: center;
`
const ViewProgressLine = styled.View`
width: 95%;
height: 35px;
background: #FF957C;
border-radius: 28px;
margin-top: 12px;
`

const Container = styled.View`
width: 100%;
height: 900px;
position: absolute;
top: 0;
`
const ViewProgress = styled.View`
display: flex;
flex-direction: row;
position: absolute;
top: -780px;
align-items: center;
justify-content: center;
margin: 0 auto;
left: -190px;
`

const styles = StyleSheet.create({
  absolute: {
    width: 390,
    height: 900,
    position: 'relative',
    marginTop: -50,
    backgroundColor: '#5ca5cc',
  }
})