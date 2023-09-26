# R114 Coding Convention

부동산 114 코딩 컨벤션

## Stack

![node](https://img.shields.io/badge/Node-v18.13.0-<>.svg?color=green)

| Type            | Module                                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Package Manager | [![yarn](https://img.shields.io/badge/Yarn-v1.22.19-117cad.svg)](https://yarnpkg.com/)                                                                                                                                               |
| Language        | [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)]([https://www.typescriptlang.org/](https://www.ecma-international.org/))                                                                                                                          |
| Framework       |  [![React](https://img.shields.io/badge/React-v18.2.0-61dafb.svg)](https://nextjs.org/)                                                       |
| Style           | [![Emotion](https://img.shields.io/badge/Emotion-v11.10.5-c43bad.svg)](https://emotion.sh/docs/introduction/)                                                                                                                        |


## Download

### Git Clone

```shell
git clone https://github.com/DongJae-Go-FE/r114-coding-convention.git
```

### Package Install

```shell
yarn install
```

### project Start

```shell
yarn start
```


## Folder Structure

- public - 정적 파일 보관 디렉토리
- src
  - components - [Atomic 디자인 패턴](https://danilowoz.com/blog/atomic-design-with-react)으로 구성
    - atoms
    - molecules
    - organisms
    - templates
  - hooks
  - utils - network 관련 함수나 기타 유틸 함수 및 외부 인프라 연결 세팅 등


## React API

- Router
- Context 제외 검토중
- Redux 


## Extension

- EsLint 검토중
- Prettier 검토중


## Import Order(검토중)

1. Hooks, API, Module
2. Components
3. Img
4. Styled, CSS



## Emotion Styled and Css Order

1. 크기 : width height overflow
2. 형태 : display visibility
3. 흐름 : float clear
4. 위치 : position left right top bottom z-index
5. 박스 : margin padding border
6. 배경 : background
7. 글자 : text font color
8. cursor transition transform 등 위에서 언급되지 않은 속성 