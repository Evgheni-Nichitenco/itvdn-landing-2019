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




