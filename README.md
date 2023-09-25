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
- Context
- Redux 제외
