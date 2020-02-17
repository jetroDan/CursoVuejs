
//Propiedades de Vue
/**
Cuando se realiza una instancia de vue este recibe como parametro json object,
el cual posee varias propiedades entre estas:
-el: Permite especificar que elemento del DOM sera controlado por nuestra intancia Vue
-data: Permite almacenar las propiedades que queremos exponer en nuestro template y para
acceder solo tenemos que usar {{}}.
-methods:Permite implementar metodos a nuetsro template, para ciertas funcionalidades o retornar datos
-computed
watch
}
**/
//Aqui se creo una instancia
/**Se declaro un objeto tipo Vue **/
 var app = new Vue({
 el : '#app',
 data : {
  lista : [

  ],
  nombre :'',
  promedio :''
},

methods :{
   agregarNota:function(){
     estadoA=false;

        if (this.promedio>=12.5) {
           estadoA=true;
        }
        if (this.nombre!="" && this.promedio!="") {

          this.lista.push({nombre:this.nombre, promedio:this.promedio,estado:this.estadoA});
          this.nombre="";
          this.promedio="";

        }else {
          alert("Ingrese el nombre del estudiante");
        }

   }

}
})
