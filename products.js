const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
	apiKey: "AIzaSyCxMeqibQAbrDiUW4ecVZOwv726mB_MnFk",
	authDomain: "pet-shop-coderhouse.firebaseapp.com",
	projectId: "pet-shop-coderhouse"
});

var db = firebase.firestore();

const productos = [
    {
        id: 1,
        title: 'Moños',
        price: 300,
        pictureUrl: 'Moños.jpg',
        description: 'Varios Colores',
        stock: 100,
        category: 'accesorios',
        outstanding: false
    },
    {
      id: 2,
      title: 'Collares Cachorros',
      price: 500,
      pictureUrl: 'CollaresCachorros.jpg',
      description: 'Varios Colores',
      stock: 100,
      category: 'accesorios',
      outstanding: true
    },
    {
      id: 3,
      title: 'Buzo Woof',
      price: 1500,
      pictureUrl: 'BuzoWoof.jpg',
      description: 'Color blanco y negro.',
      stock: 100,
      category: 'ropa',
      outstanding: true
    },
    {
      id: 4,
      title: 'Collar Led',
      price: 700,
      pictureUrl: 'CollarLed.jpg',
      description: 'Varios Colores',
      stock: 100,
      category: 'accesorios',
      outstanding: true
    },
    {
      id: 5,
      title: 'Sueter Lana',
      price: 1000,
      pictureUrl: 'SueterLana.jpg',
      description: 'Varios Colores',
      stock: 100,
      category: 'ropa',
      outstanding: true
    },
    {
      id: 6,
      title: 'Buzo Navideño',
      price: 1000,
      pictureUrl: 'BuzosNavideños.jpg',
      description: 'Varios Modelos',
      stock: 100,
      category: 'ropa',
      outstanding: true
    },
    {
      id: 7,
      title: 'Zapatillas',
      price: 800,
      pictureUrl: 'Zapatillas.jpg',
      description: 'Anti deslizantes',
      stock: 100,
      category: 'ropa',
      outstanding: true
    },
    {
      id: 8,
      title: 'Vestidos',
      price: 1000,
      pictureUrl: 'Vestidos.jpg',
      description: 'Cuadrille',
      stock: 100,
      category: 'ropa',
      outstanding: true
    },
    {
        id: 9,
        title: 'Gorra',
        price: 900,
        pictureUrl: 'Gorra.jpg',
        description: 'Regulable,2 tamaños.',
        stock: 100,
        category: 'accesorios',
        outstanding: false
    },
    {
      id: 10,
      title: 'Remeras Disney',
      price: 1400,
      pictureUrl: 'RemerasDisney.jpg',
      description: 'Varios Modelos',
      stock: 100,
      category: 'ropa',
      outstanding: true
    },
    {
      id: 11,
      title: 'Buzo Adidog',
      price: 1500,
      pictureUrl: 'BuzoAdidog.jpg',
      description: 'Colores:Gris,Negro,Rosa,Rojo.',
      stock: 100,
      category: 'ropa',
      outstanding: true
    },
    {
      id: 12,
      title: 'Chombas',
      price: 1400,
      pictureUrl: 'Chombas.jpg',
      description: 'Varios Colores',
      stock: 100,
      category: 'ropa',
      outstanding: true
    },
    {
      id: 13,
      title: 'Cadenas',
      price: 700,
      pictureUrl: 'Cadenas.jpg',
      description: 'Plateado o Dorado',
      stock: 100,
      category: 'accesorios',
      outstanding: true
    },
    {
        id: 14,
        title: 'Camisa Hawai',
        price: 1000,
        pictureUrl: 'CamisasHawai.jpg',
        description: 'Varios Colores',
        stock: 100,
        category: 'ropa',
        outstanding: false
    },
    {
      id: 15,
      title: 'Bandanas',
      price: 600,
      pictureUrl: 'Bandanas.jpg',
      description: 'Varios Modelos',
      stock: 100,
      category: 'accesorios',
      outstanding: false
    }
];

productos.forEach((obj) => {
  db.collection("productos")
    .add({
      id: obj.id,
      category: obj.category,
      title: obj.title,
      description: obj.description,
      pictureUrl: obj.pictureUrl,
      price: obj.price,
      stock: obj.stock,
      outstanding: obj.outstanding

    })
    .then((docRef) => {
      console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar un documento: ", error);
    });
});
