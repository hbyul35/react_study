# root file
## package.json
프로젝트의 설정서.

## package-lock.json
각 라이브러리의 정확한 버전 기록

---

# public/ 폴더 (정적 파일)
## index.html
React가 “주입(inject)”되는 HTML 뼈대.
<div id="root"></div>에 index.js가 React 컴포넌트를 렌더링함.

## favicon.ico
브라우저 탭 아이콘

## manifest.json
PWA(웹앱) 설정 정보 (모바일 홈 화면 아이콘 등)

## robots.txt
검색 엔진 크롤러 규칙

--- 

# src/ 폴더 (React 코드 핵심)
실행 순서

1. index.html  ← HTML 틀
2. index.js    ← ReactDOM이 App.js를 root에 렌더링
3. App.js      ← 컴포넌트 트리 시작
4. Components  ← 실제 화면 요소들

## index.js
앱 시작점 (ReactDOM이 App을 root에 렌더링)
React 세계(JSX) 와 HTML 세계(DOM) 를 연결하는 다리 역할.

## App.js
루트 컴포넌트 (전체 UI 뼈대)

## App.css / index.css
CSS 파일은 앱 전체에 공통으로 적용된다.

모든 컴포넌트에 적용되는 기본 스타일 정의
전역 폰트, 배경, 레이아웃 초기화 등 담당

## logo.svg
CRA 기본 로고 예시

## components/
커스텀 컴포넌트 보관 폴더

## hooks/
커스텀 Hook (useCounter, useFetch 등)

## utils/
유틸 함수

## assets/
이미지, 폰트, 사운드 등 리소스

## pages/
페이지 단위 컴포넌트 (라우팅 시 사용)