# Notes

### Описание проекта
В данном проекте пользователь имеет возможность создавать/удалять свои собственные заметки с теггами и без.

В этом приложении:
- Vue CLI с Vue 3;
- хранение заметок в localStorage;
- применение глобального хранилища VueX;
- Options API;
- разделение логики по компонентам;
- создание глобальных конфигов.
***
### Просмотр проекта

https://github.com/Dasha987/notes-vueX-vue3/assets/33686892/a0b2bc00-c15b-44ce-ac09-7ba52302bcd7

***
## Project setup
Чтобы была возможность использовать проект под свои нужды, необходимо в файле "vue.config.js" закомментировать строчку "roductionSourceMap: false". Она служит для корректного билдинга приложения, благодаря ей в папку "dist" не попадут файлы с расширением .map, поэтому при билдинге строчку рекомендую раскомментировать.
```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
