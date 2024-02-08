# yarn-workspace-test

- `mkdir yarn-workspace-test`로 설치
- `yarn init -2 -w`로 프로젝트 초기 세팅
  - `-2`는 yarn berry를 사용하겠다는 의미
  - `-w`는 workspace를 사용하겠다는 의미
- `yarn add -D typescript`로 typescript 설치
- `yarn add -D --exact @biomejs/biome`으로 biome 설치
- `yarn dlx @yarnpkg/sdks vscode`로 sdk 관련 파일 생성
- `/packages/app1`에 vite 설치를 위해 `yarn create vite` 실행 후 name을 `.`로 입력하여 해당 폴더에 설치
