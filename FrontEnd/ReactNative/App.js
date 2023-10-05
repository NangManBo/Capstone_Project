import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles, SCREEN_WIDTH } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// 페이지 인디케이터(점)
function PageIndicator({ currentPage, totalPages }) {
  const indicators = [];

  for (let i = 1; i <= totalPages; i++) {
    indicators.push(
      <View
        key={i}
        style={[
          styles.indicator,
          i === currentPage ? styles.activeIndicator : null,
        ]}
      >
        <Text
          style={[
            styles.indicatorText,
            i === currentPage,
            //</View> ? styles.activeIndicatorText
            // : styles.activeIndicatorText, //null,
          ]}
        ></Text>
      </View>
    );
  }

  return (
    <View style={styles.pageIndicatorContainer}>
      {indicators}
    </View>
  );
}

const HomeScreen = ({ navigation }) => {
  const CategoryPlusPress = () => {
    navigation.navigate('CategoryPlus', {
      scrollViewContent: (
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={true} // 수직 스크롤바 표시
        >
          <View>
            <Image
              source={require('./assets/plusButton2.png')}
              style={styles.write_btn}
            />
            <View style={styles.boxinbox}>
              <TouchableOpacity onPress={handleToggleLike}>
                <Image
                  source={require('./assets/good.png')}
                  style={styles.goodbtn}
                />
                <Text style={styles.goodnum}>{count}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* 첫번째 카테고리의 모든 박스 생성 */}
          <TouchableOpacity onPress={ChooseScreenPress1}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                >
                  <Image
                    source={require('./assets/good.png')}
                    style={styles.goodbtn}
                  />
                  <Text style={styles.goodnum}>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress2}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                >
                  <Image
                    source={require('./assets/good.png')}
                    style={styles.goodbtn}
                  />
                  <Text style={styles.goodnum}>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress3}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                >
                  <Image
                    source={require('./assets/good.png')}
                    style={styles.goodbtn}
                  />
                  <Text style={styles.goodnum}>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress4}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                >
                  <Image
                    source={require('./assets/good.png')}
                    style={styles.goodbtn}
                  />
                  <Text style={styles.goodnum}>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress5}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress6}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                >
                  <Image
                    source={require('./assets/good.png')}
                    style={styles.goodbtn}
                  />
                  <Text style={styles.goodnum}>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress7}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
            </View>
            <View style={styles.boxinbox}>
              <TouchableOpacity onPress={handleToggleLike}>
                <Image
                  source={require('./assets/good.png')}
                  style={styles.goodbtn}
                />
                <Text style={styles.goodnum}>{count}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress8}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                >
                  <Image
                    source={require('./assets/good.png')}
                    style={styles.goodbtn}
                  />
                  <Text style={styles.goodnum}>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress9}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                >
                  <Image
                    source={require('./assets/good.png')}
                    style={styles.goodbtn}
                  />
                  <Text style={styles.goodnum}>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChooseScreenPress10}>
            <View>
              <Image
                source={require('./assets/box.png')}
                style={styles.plus_box}
              />
              <View style={styles.boxinbox}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                >
                  <Image
                    source={require('./assets/good.png')}
                    style={styles.goodbtn}
                  />
                  <Text style={styles.goodnum}>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ),
    });
  };
  const ChooseScreenPress1 = () => {
    navigation.navigate('Choose1');
  };
  const ChooseScreenPress2 = () => {
    navigation.navigate('Choose2');
  };
  const ChooseScreenPress3 = () => {
    navigation.navigate('Choose3');
  };
  const ChooseScreenPress4 = () => {
    navigation.navigate('Choose4');
  };
  const ChooseScreenPress5 = () => {
    navigation.navigate('Choose5');
  };
  const ChooseScreenPress6 = () => {
    navigation.navigate('Choose6');
  };
  const ChooseScreenPress7 = () => {
    navigation.navigate('Choose7');
  };
  const ChooseScreenPress8 = () => {
    navigation.navigate('Choose8');
  };
  const ChooseScreenPress9 = () => {
    navigation.navigate('Choose9');
  };
  const ChooseScreenPress10 = () => {
    navigation.navigate('Choose10');
  };

  //인디케이터
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // 총 페이지 수

  const handleScroll = (event) => {
    const contentOffsetX =
      event.nativeEvent.contentOffset.x;
    const page = Math.ceil(
      contentOffsetX / SCREEN_WIDTH + 1
    ); // 스크롤 위치에 따라 페이지 계산
    setCurrentPage(page);
  };

  //
  const [count, setCount] = useState(0); // 초기값은 0
  const [isLiked, setIsLiked] = useState(false); // 버튼 상태 초기값은 좋아요하지 않음

  // 버튼을 누를 때 실행되는 함수
  const handleToggleLike = () => {
    if (isLiked) {
      // 이미 좋아요한 상태라면 -1
      setCount(count - 1);
    } else {
      // 아직 좋아요하지 않은 상태라면 +1
      setCount(count + 1);
    }

    // 버튼 상태 토글
    setIsLiked(!isLiked);
  };
  return (
    <ScrollView vertical={true}>
      <View style={styles.first_title}>
        <Text style={styles.first_text}>투표는 투기장</Text>
      </View>
      <View style={styles.second_title}>
        <Text style={styles.second_text}>
          카테고리별 투표
        </Text>
        <TouchableOpacity onPress={CategoryPlusPress}>
          <Text style={styles.second_text}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true} // 수평 스크롤 가능하도록 설정
        pagingEnabled // 페이지 단위로 스크롤
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll}
      >
        {/* 첫번째 여러 개의 작은 박스 생성 */}
        <TouchableOpacity onPress={ChooseScreenPress1}>
          <View>
            <Image
              source={require('./assets/box.png')}
              style={styles.box}
            />
            <View style={styles.boxinbox}>
              <TouchableOpacity onPress={handleToggleLike}>
                <Image
                  source={require('./assets/good.png')}
                  style={styles.goodbtn}
                />
                <Text style={styles.goodnum}>{count}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ChooseScreenPress2}>
          <View>
            <Image
              source={require('./assets/box.png')}
              style={styles.box}
            />
            <View style={styles.boxinbox}>
              <TouchableOpacity onPress={handleToggleLike}>
                <Image
                  source={require('./assets/good.png')}
                  style={styles.goodbtn}
                />
                <Text style={styles.goodnum}>{count}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ChooseScreenPress3}>
          <View>
            <Image
              source={require('./assets/box.png')}
              style={styles.box}
            />
            <View style={styles.boxinbox}>
              <TouchableOpacity onPress={handleToggleLike}>
                <Image
                  source={require('./assets/good.png')}
                  style={styles.goodbtn}
                />
                <Text style={styles.goodnum}>{count}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <PageIndicator
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </ScrollView>
  );
};

// 더보기
const CategoryPlus = ({ route }) => {
  const { scrollViewContent } = route.params;
  return (
    <View style={styles.container}>
      {scrollViewContent}
    </View>
  );
};

const Choose1 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen1</Text>
    </View>
  );
};

const Choose2 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen2</Text>
    </View>
  );
};

const Choose3 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen3</Text>
    </View>
  );
};

const Choose4 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen1</Text>
    </View>
  );
};

const Choose5 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen2</Text>
    </View>
  );
};

const Choose6 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen3</Text>
    </View>
  );
};

const Choose7 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen1</Text>
    </View>
  );
};

const Choose8 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen2</Text>
    </View>
  );
};

const Choose9 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen3</Text>
    </View>
  );
};

const Choose10 = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen3</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Do표" component={HomeScreen} />
        <Stack.Screen
          name="CategoryPlus"
          component={CategoryPlus}
        />
        <Stack.Screen name="Choose1" component={Choose1} />
        <Stack.Screen name="Choose2" component={Choose2} />
        <Stack.Screen name="Choose3" component={Choose3} />
        <Stack.Screen name="Choose4" component={Choose4} />
        <Stack.Screen name="Choose5" component={Choose5} />
        <Stack.Screen name="Choose6" component={Choose6} />
        <Stack.Screen name="Choose7" component={Choose7} />
        <Stack.Screen name="Choose8" component={Choose8} />
        <Stack.Screen name="Choose9" component={Choose9} />
        <Stack.Screen
          name="Choose10"
          component={Choose10}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
