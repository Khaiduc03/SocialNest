import {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {BigButton} from '../../../../components';
import Pagination from './Pagination';
import SlideItem from './SlideItem';
import Slides from './slides';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null); // Thêm ref cho FlatList
  const totalSlides = Slides.length;

  const handleNextButtonPress = () => {
    // Kiểm tra nếu đang ở cuối danh sách thì không thực hiện gì cả
    if (index === totalSlides - 1) {
      return;
    }

    // Chuyển đến slide tiếp theo
    flatListRef.current.scrollToIndex({animated: true, index: index + 1});
    setIndex(index + 1);
  };

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const isAtEnd =
        value >= (totalSlides - 1) * Dimensions.get('window').width;

      if (isAtEnd) {
        // Ở cuối danh sách, bạn có thể thực hiện các hành động tại đây
      }
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);
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
        ref={flatListRef}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <View style={{width: '30%', position: 'absolute', bottom: 32, right: 24}}>
        <BigButton textButton="Next" onPressButton={handleNextButtonPress} />
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
