const arreglo = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '/']

const app = Vue.createApp({

    data() {
        return {
            miarreglo: arreglo,
            pantalla: ''
        }
    },

    methods: {
        agregarCaracter(caracter) {
            this.pantalla += caracter;
        },

        calcular() {
            this.pantalla = eval(this.pantalla);
        }

    }

})

app.mount('#myApp3')