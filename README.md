# 원티드 프리온보딩 프론트엔드 과제

- [원티드 프리온보딩 프론트엔드 과제](#원티드-프리온보딩-프론트엔드-과제)
  - [지원자 이름](#지원자-이름)
  - [프로젝트 실행방법](#프로젝트-실행방법)
  - [데모 페이지](#데모-페이지)
  - [주요 기능](#주요-기능)
  - [사용 라이브러리](#사용-라이브러리)

<br>

## 지원자 이름

**김동규**(Kim Dong Kyu)

<br>

## 프로젝트 실행방법

```
$ git clone https://github.com/5kdk/wanted-pre-onboarding-frontend.git
$ cd wanted-pre-onboarding-frontend
$ npm install
$ npm start
```

<br>

## 데모 페이지

[데모 링크](https://wanted-pre-onboarding-frontend-xi.vercel.app)

<br>

## 주요 기능

[가이드라인](https://github.com/walking-sunset/selection-task)

1. 로그인 / 회원가입 기능 구현
   - `/signup` 경로에 회원가입 기능을 개발
   - `/signin` 경로에 로그인 기능 개발
   - 유효성 검사
   - 회원가입 정상 완료시 `/signin` 경로 이동
   - 로그인 정상 완료시 `/todo` 경로 이동
   - JWT 로컬스토리지 사용
   - 로그인 여부에 따른 리다이렉트
2. Todo List 구현
   - `/todo` 경로 접근시 todo List을 볼 수 있도록 구현
   - add Todo 구현
   - 완료 여부 체크박스 구현
   - delete Todo 구현
   - edit Todo 구현

<br>

## 사용 라이브러리

- Styled Components
- Axios
- React Router Dom
- Eslint
