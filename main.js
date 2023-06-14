const 
    $form = document.querySelector("[data-form]"),
    $showDataEl = document.querySelector (".show-data");

  show();
    //tarea: obtener los datos del localStorage
function getData(){
  return JSON.parse (localStorage.getItem("todos")) || [];
  
}

//CRUD 
//Create: crear y/o insertar un prducto { id, name,price}
function add () {

}
//Read : obtener la data y mostrar el DOM 
function add () {
  const data = getData();
  console.log(data);
}
//Update
function add () {

}
//Delete 
function add () {

}



    console.log($form);
console.log($showDataEl);

$form.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    console.log( 'hola' );
});
