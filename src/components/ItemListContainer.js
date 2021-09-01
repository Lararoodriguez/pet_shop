import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';

function ItemListContainer() {

  const { category_name } = useParams();

  const [items, setItems] = useState([]);

  /* console.log(id) */
    const productos = [
      {
          id: 1,
          title: 'Moños',
          price: 500,
          pictureUrl: 'https://i.ebayimg.com/images/g/tPkAAOSwZKBg1uYG/s-l1600.jpg',
          description: 'Moños Colores Varios.',
          stock: 100,
          category: 'accesorios'
  
      },
      {
          id: 2,
          title: 'Collar',
          price: 800,
          pictureUrl: 'https://i.ebayimg.com/images/g/trEAAOSwP35fD~ON/s-l500.jpg',
          description: 'Collar color dorada y plateada.',
          stock: 5,
          category: 'accesorios'
      },
      {
          id: 3,
          title: 'Campera Jean',
          price: 1500,
          pictureUrl: 'https://i.ebayimg.com/images/g/4zMAAOSwH3thLdso/s-l1600.jpg',
          description: 'Campera de Jean Bordadas.',
          stock: 10,
          category: 'ropa'
      },
      {
        id: 4,
        title: 'Buzos Estampados',
        price: 1500,
        pictureUrl: 'https://i.ebayimg.com/images/g/hdQAAOSwCIFhLeqv/s-l1600.jpg',
        description: 'Buzo friza varios estampados.',
        stock: 10,
        category: 'ropa'
    },
    {
      id: 5,
      title: 'Buzo Adidog',
      price: 1500,
      pictureUrl: 'https://i.ebayimg.com/images/g/sPwAAOSwiCFeCBtm/s-l1600.jpg',
      description: 'Buzo Varios Colores.',
      stock: 10,
      category: 'ropa'
    }
]; 
  
const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      /* console.log(typeof categoryId === 'undefined') */
         if (typeof category_name !== 'undefined') {

            const itemFiltadros = productos.filter((item) => {
              /*console.log(item.category)*/
              /*console.log(category_name)*/
              return item.category == category_name
        });
          /*console.log(itemFiltadros)*/
          resolve(itemFiltadros);
        }else{
          resolve(productos);
        }


    }, 1500)
})

useEffect(() => {
    getProducts.then(rta => {

      setItems(rta)

    });
// eslint-disable-next-line react-hooks/exhaustive-deps

}, [category_name]);
    return (
      <section>
        <div className="container">
          {
            items.length ?
          <>
            <h2 className="titulo-seccion">Productos destacados</h2>
            <ItemList items={items}/>
            
          </> :
            <p className="cargando">Cargando...</p>
          }
        </div>
      </section>
    );
}
  
export default ItemListContainer;