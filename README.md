# Верстка лендинга по курсу канала ITVDN
## Перед стартом проекта необходимо:

node -v
npm -v

README.md
git.ighore

git init

Подключение GiTHUB

npm install browser-sync gulp --save-dev
npm install gulp-pug --save-dev

Создаем gulpfile.js

npm install eslint

gulp --tasks   Посмотреть все таски

npm i gulp-sass --save-dev
npm i gulp.spritesmith --save-dev
npm i rimraf --save-dev

## Pug

        ul.list
            each link in links
                li.list__item
                    if link === 'Home'
                        span=link
                    else
                        a(href="#").list__link=link

        ul
            each link in anoterLinks
                li
                    if link === 'AnoterHome'
                        span=link
                    else
                        a(href="#")=link

https://fontawesome.com/v4.7.0/icon/mobile

https://www.npmjs.com/package/font-awesome-v5-icons


<i class="fa fa-mobile" aria-hidden="true"></i>

npm install --save font-awesome     Работа с иконками
npm install --save normalize.scss

@import url("https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

<i class="fa fa-envelope" aria-hidden="true"></i>

<i class="fa fa-facebook-square" aria-hidden="true"></i>







