import {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {BigButton} from '../../../../components';
import Pagination from './Pagination';
import SlideItem from './SlideItem';
import Slides from './slides';
import {useAppDispatch} from '../../../../hooks';
import {AppActions} from '../../../../redux/reducer';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Text} from '@rneui/themed';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const totalSlides = Slides.length;
  const flatListRef = useRef<any>(null);
  const dispatch = useAppDispatch();

  const handleReady = () => {
    dispatch(AppActions.handleReady(true));
    NavigationService.navigate(routes.LOBBY);
  };
  const handleNextButton = () => {
    if (index === totalSlides - 1) {
      return handleReady();
    }
    flatListRef.current.scrollToIndex({animated: true, index: index + 1});
    setIndex(index + 1);
  };

  const handlebackButton = () => {
    if (index === 0) {
      return;
    }
    flatListRef.current.scrollToIndex({animated: true, index: index - 1});
    setIndex(index + 1);
  };

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        ref={flatListRef}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <View
        style={{
          width: '30%',
          position: 'absolute',
          bottom: 32,
          right: 24,
          flexDirection: 'row',
          justifyContent:'space-between'
        }}>
        <BigButton textButton="Next" onPressButton={handleNextButton} />
        
      </View>
      {index > 0 && (
        <View
          style={{
            width: '20%',
            position: 'absolute',
            bottom: 32,
            right: 150,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={handlebackButton}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Slider;
