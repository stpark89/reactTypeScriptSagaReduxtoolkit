#### 설치 모듈  ###

1. CRA - Typescript 설치
npx create-react-app 소문자프로젝트명 --template typescript

2.axios 섩치
yarn add axios 
yarn add --dev @types/axios

3. redux 설치 
yarn add redux react-redux
yarn add --dev @types/react-reudx

4. redux-saga 설치
yarn add redux-saga
yarn add --dev @types/redux-saga

5.라우터
yarn add react-router-dom
yarn add --dev @types/react-router-dom

6.react-router-redux
yarn add react-router-redux
yarn add --dev @types/react-router-redux

7.ramda
yarn add ramda
yarn add --dev @types/ramda

8.true-myth
yarn add true-myth

9. toolkit - reactAction 
yarn add @reduxjs/toolkit

10.core-js3 - es5 ( ie 지원등 저버전 지원하기위한 - es6 문법 ) 
yarn add core-js@3

11.true-myth 널체크
yarn add true-myth

12.redux-thunk
yarn add redux-thunk
yarn add --dev @types/redux-thunk

13. type-fest  ( saga - api 호출시 사용 ) 
yarn add type-fest

// 블루 버드 - promise 지원안하는 저사양 브라우저일때 

14.그리드 시스템
yarn add react-grid-layout
yarn add --dev @types/react-grid-layout

15. 드래그앤 드랍 
yarn add react-dnd 
yarn add --dev @types/react-dnd

16. 네이티브용. 파일 드래그 앤 드랍 등등
yarn add react-dnd-html5-backend
yarn add --dev @types/react-dnd-html5-backend


17. 디자인 - 메테리얼 코어 
yarn add @material-ui/core

17-2. 메테리얼 아이콘 
yarn add @material-ui/icons

17-3. 메테리얼 커스텀. - 자동완성 등
yarn add @material-ui/lab


## Learn More

1.Duck 패턴 적용. 리덕스 사가, 리덕스 사용시 
 # 1.1.action.ts 확인 
 # 1.2.saga.ts 확인
 # 1.3.reducer.ts 확인 
 
 각 메뉴별 디렉토리 추가하며 위 3개 파일 생성하고 작업해주면 됨. 
 
 2.Saga 적용 방법  ( 설정 )
  # 2.1. 최상위 경로 ( App.tsx ) 있는 경로에서 store.ts 파일 확인 
  # store.ts 
    # createSagaMiddleWare() 메서드를 통해 사가를 생성, 추가적으로 thunk 도 적용가능하도록 미들웨어 라는 변수에 추가 작업. 
    # configureStore 를 통해서 리듀서와 미들웨어 설정 정보를 store 변수에 저장. ( index Provider 에서 사용 ) - reactToolkit lib
    # sagaMiddleware.run(rootSaga);  # rootSaga 는 내가 만들어놓은 파일. 
    
  # 2.2. rootSaga  ( saga.ts ) 
    # 동일한 경로 ( 최상위 )에 saga.ts 를 만들어줌. 
    # 해당 파일 내부에는 saga 들의 메서드를 나레벨 함. ( 모든 yield takeEvery 를 사용하는 메서드는 모두 적어줌 ) 
    
    
 3. Saga 사용 법 
    # modules 디렉 토리 내부에 보면 각 메뉴별 sample, user 디렉토리가 존재함. 실제 개발할때 만드는 화면에 따라 디렉토리를 구분하여 action,saga,reducer, selector 총 4개 파일을 만들어서 작업하면됨 
    # saga 에 추가되는 메서드 들은 rootSaga 내부에 메서드명을 적으면 적용 완료
    
  
    
  
    
    
    
      
 
 
 


