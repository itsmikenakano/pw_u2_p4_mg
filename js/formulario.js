const arreglo = [
    { nombre: 'Michael', apellido: 'Garcia', semestre: 'octavo', edad:'21'},
    { nombre: 'Mika', apellido: 'Gamez', semestre: 'septimo', edad:'23'}    
]

const app = Vue.createApp({

    data() {
        return {
            arregloEstudiantes:arreglo,
            nombre:'',
            apellido:'',
            semestre:'',
            edad:''
        }
    },

    methods: {
        ingresarEstudiante() {
            const nuevoEstudiante={
                nombre: this.nombre,
                apellido: this.apellido,
                semestre: this.semestre,
                edad: this.edad
            }
            this.arregloEstudiantes.push(nuevoEstudiante)
            this.nombre=''
            this.apellido=''
            this.semestre=''
            this.edad=''

        }
    }

})

app.mount('#appForm')