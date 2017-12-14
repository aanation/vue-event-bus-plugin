#event-bus-plugin

Простейший плагин который прокидывает шину событий вниз по дереву компонентов, позволяя регистрировать и обрабатывать события в любом компоненте любой вложенности. 

##Установка 

1) Классическое спа

```javascript 
import eventBusPlugin from 'event-bus-plugin'; 
import Vue from 'vue'; 
import App from './App';
import router from './router;
import store from './store';

Vue.use(eventBusPlugin); 

const bus = new Vue(); 

const app = new Vue({
    bus, 
    store, 
    router, 
    render: h => h(App)
});

```

2) Приложение с серверным рендерингом:

```javascript 
import eventBusPlugin from 'event-bus-plugin'; 
import Vue from 'vue'; 
import App from './App';
import createRouter from './router;
import createStore from './store';

Vue.use(eventBusPlugin);

export default function createApp() {
    const store = createStore();
    const router = createRouter(); 
    const bus = new Vue(); 

    return new Vue({
        bus, 
        store, 
        router, 
        render: h => h(App)
    });
}
```

##Использование 

1) Регистрация обработчика:

```html
<template>
    <div>{{ text }}</div>
</template>

<script>
    export default {
        name: 'someComponent', 
        data() {
            return {
                text: null
            }
        }, 
        methods: {
            say(text) {
                this.text = text; 
            }
        }, 
        mounted() { 
        /*в случае ssr этот обработчик будет зарегистрирован только на клиенте*/
            this.$bus.$on('some-event', (cb) => {
                this.say('Я обрабатываю тебя полностью, хитрый эвент!');
                cb(); //можно передать произвольные данные, в т.ч. колбэк который будет вызван после обработки эвента 
            }); 
        }
    }
</script>
```


2) Вызов эвента в любом другом компоненте приложения не обязательно связанным иерархически 


```html 
<template>
    <button @click="trigger">Вызови эвент, ну чо ты как баба</button>
</template>

<script>
    export default {
        name: 'otherComponent', 
        methods: {
            trigger() {
                this.$bus.$emit('some-event', () => {
                    console.log('Мой эвент успешно обработан. Ура!');
                });
            }
        }
    }
</script>
```