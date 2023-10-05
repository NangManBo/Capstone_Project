import { StyleSheet, Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  //기본
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollViewContent: {
    flexDirection: 'row', // 수평으로 정렬
  },

  // 첫 페이지 게시글 박스
  box: {
    width: SCREEN_WIDTH - 40,
    borderRadius: 50,
    height: 300, // 박스 높이 조절
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  // 게시글 박스 안의 박스
  boxinbox: {
    borderRadius: 25,

    position: 'absolute',
    left: 40, // 왼쪽에서 50 포인트
    top: 200, // 위에서 100 포인트
    width: SCREEN_WIDTH - 80, // 가로 100 포인트
    height: 100, // 세로 100 포인트
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  // 좋아요 버튼
  goodbtn: {
    borderRadius: 25,
    position: 'absolute',
    left: SCREEN_WIDTH - 180,
    width: SCREEN_WIDTH - 330,
    top: 50,
    height: 30,
  },
  // 좋아요 숫자
  goodnum: {
    borderRadius: 25,
    position: 'absolute',
    left: SCREEN_WIDTH - 120,
    width: SCREEN_WIDTH - 330,
    top: 57,
    height: 30,
    fontSize: 15,
  },

  // 첫 페이지 게시글 텍스트
  text: {
    fontSize: 24,
    color: 'white',
  },

  // 투표는 투기장 위치
  first_title: {
    marginTop: 20,
    marginLeft: 25,
  },

  // 투표는 투기장
  first_text: {
    fontSize: 30,
    color: 'black',
  },
  // 카테고리 투표, 더보기 위치
  second_title: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 25,
    marginTop: 10,
    marginbottom: 20,
    marginLeft: 25,
  },

  // 카테고리 투표, 더보기
  second_text: {
    fontSize: 15,
    color: 'black',
  },

  // 첫 페이지 두 번째 박스 라인(가로)
  second_title_2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 20,
    marginTop: 100,
    marginLeft: 20,
  },

  // 마지막 하단 바 남기는 용
  last_box: {
    marginBottom: 50,
  },

  // 이거는 카테고리 더보기 들어가면 나오는 곳
  plus_box: {
    width: SCREEN_WIDTH - 40,
    borderRadius: 50,
    height: 300, // 박스 높이 조절
    backgroundColor: 'black', // 박스 배경색 흰색으로 설정
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },

  // 글쓰기 버튼
  write_btn: {
    marginLeft: SCREEN_WIDTH - 60,
    backgroundColor: 'white',
    marginTop: 10,
    width: 35,
    height: 35,
    marginBottom: 10,
  },

  //인디케이터
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  indicator: {
    marginTop: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'black', // 활성 페이지의 배경색
  },
  indicatorText: {
    fontSize: 10,
    color: 'black',
  },
});
