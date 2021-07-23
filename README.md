# Portfolio

# Commit Description

> HTML/CSS : Nav

```
+ 포토폴리오 사이트 레이아웃 구성
+ 포토폴리오 상단에 표시할 NavBar HTML/CSS 코딩
+ 폰트 설정 : Noto Sans KR(Google Fonts)
```

> HTML/CSS : Home

```
+ 전체적인 내용을 한 눈에 표시할 Home HTML/CSS 코딩
+ Home Title 폰트 설정 : Roboto(Google Fonts)
```

> HTML/CSS : About

```
+ 나에 대해 소개하는 About HTML/CSS 코딩
+ 사진을 저장할 imgs 폴더 생성
```

> HTML/CSS : Skill

```
+ 사용할 수 있는 기술을 소개하는 Skill HTML/CSS 코딩
+ fontawesome 아이콘 사용
```

> HTML/CSS : Project

```
+ 프로젝트를 소개하는 Project HTML/CSS 코딩
+ imgs 폴더에 test-img.jpg 파일 추가
? CSS의 class명을 조금 더 효율적으로 관리할 수 없을까?
    > SASS(SCSS)라는 기술이 있다. HTML/CSS 작업이 끝나면 설치하여 적용해보자.
    > 적용해보니 지금은 나오는 .css 파일이 동일하기에 이후 프로젝트에서는 SCSS를 통해 작업하자. 확실히 CSS보단 편하다.
```

> HTML/CSS : Contact

```
+ 이메일 및 깃허브를 보여줄 Contact HTML/CSS 코딩
```

> HTML/CSS : Fix

```
+ about에 있던 profile 이미지 home으로 이동
+ about에 title 추가
+ about에 학교 추가
+ projects는 6개로 고정
+ 전체적인 글자 크기 조정
```

> JS : function handleScroll

```
+ 동적 기능을 추가하기 위한 main.js 파일 생성 및 적용
+ 스크롤 시 menu 배경 추가
+ 스크롤 시 home 투명도 설정
    > home 안에 있는 요소만 투명도를 설정하기 위해 menu와 home가지는 top div 추가
```

> JS : fucntion handleMenu

```
+ Menu에 있는 항목을 클릭 시 해당 항목으로 이동
+ home에 있는 contact me 버튼을 클릭 시 contact 항목으로 이동
```

> HTML/CSS/JS : Responsive and function handleToggle

```
HTML
+ menu 항목에 toggle button 추가
+ contact me 항목에서 github 아이콘 클릭 시 페이지 open

CSS(Responsive)
+ 화면 크기가 작아질 시 menu list가 toggle button으로 변경
+ Projects의 이미지 크기 변경

JS
+ 변경된 toggle button 클릭 시 menu list를 표시
```

> CSS/JS : Change Color and function handleActiveRemove

```
CSS
+ top, menu, skill 항목의 배경 변경
    > 어두운 계열보단 밝은 계열이 더 괜찮아보인다.

JS
+ handleToggle -> handleActiveToggle 로 이름 변경
    > 함수를 조금 더 명확하게 표기
+ handleActiveRemove funtion 추가
    > 화면이 작아질 시 나오는 햄버거 바를 클릭하면 메뉴창이 나오는데 메뉴를 클릭 시 해당 메뉴창이 사라지도록 코딩하고 싶었다. 원래는 handdleActiveToggle을 사용하여 동작했으나 test를 해보니 메뉴창에서 home항목을 두번 클릭 시 toggle이기에 내가 원하는 방향과 반대방향으로 작동하는 것을 확인할 수 있었다. 이를 해결하기 위해 toggle이 아닌 remove를 통해 동작하도록 하였다.
```

> HTML/CSS/JS : Fix fucntion handleMenu

```
HTML
+ menu list에 data 값 추가
    > 클릭 시 해당 항목의 id값을 가져오기 위해

CSS
- menu title:hover 제거
    > 기본으로 놓는게 더 괜찮은 거 같다.

JS
+ fucntion handleMenu에서 foreach로 스크롤링 되던 걸 scrollIntoView로 스크롤링 되게 수정
    > 성능면에서도 훨씬 좋고 코드가 간결해졌다. 더욱 배우자.
```

> CSS : Final Touch

```
+ 모바일에서 보기 편하도록 있도록 CSS 추가 및 변경
```
