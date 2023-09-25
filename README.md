# RDS(R114 Design System) Homepage

부동산 114 디자인 시스템 홈페이지

## Stack

![node](https://img.shields.io/badge/Node-v18.13.0-<>.svg?color=green)

| Type            | Module                                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Package Manager | [![yarn](https://img.shields.io/badge/Yarn-v1.22.19-117cad.svg)](https://yarnpkg.com/)                                                                                                                                               |
| Language        | [![TypeScript](https://img.shields.io/badge/TypeScript-v4.9.4-3178c6.svg)](https://www.typescriptlang.org/)                                                                                                                          |
| Framework       | [![Next.js](https://img.shields.io/badge/Next.js-v13.4.3-000.svg)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-v18.2.0-61dafb.svg)](https://nextjs.org/)                                                       |
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
