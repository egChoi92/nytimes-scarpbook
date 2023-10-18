# 뉴욕 타임즈 스크랩북

<a href="https://nytimes-scarpbook.vercel.app/" target="_blank">※사이트 바로가기</a>

## 프로젝트 개요
New York Times 의 API를 활용해 기사 리스트를 불러오고, 원하는 기사를 스크랩하고 검색 및 필터링 기능을 추가한 웹

### 프로젝트 실행 방법
```bash
git clone https://github.com/egChoi92/nytimes-scarpbook.git
cd nytimes-scarpbook
npm install
npm run start
```   

### 기술 스택
#### Environment
<div>
<img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
</div>

#### Development
<div>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Zustand-48433D?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/React query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
</div>

### 폴더 구조
```bash
root
 ┣📦src
 ┃ ┣ 📂assets     에셋 폴더
 ┃ ┣ 📂components 공통 컴포넌트 폴더
 ┃ ┣ 📂constants  공통 상수 폴더
 ┃ ┣ 📂hooks      커스텀훅 폴더
 ┃ ┣ 📂router     라우터 폴더
 ┃ ┣ 📂store      전역 상태 폴더
 ┃ ┣ 📂styles     공통 CSS 폴더
 ┃ ┣ 📂types      공통 타입 폴더
 ┃ ┣ 📂utils      공통 함수 폴더
 ┃ ┣ 📂views      페이지 컴포넌트 폴더
 ┃ ┣ 📜App.js     
 ┃ ┗ 📜index.js   
```