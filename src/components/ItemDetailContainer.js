import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const { id } = useParams();

    const [item, setItem] = useState({});

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

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            const [producto] = productos.filter((item) => item.id == id);
            /* console.log(producto) */
            resolve(producto);
        }, 2000)
    })

    useEffect(() => {

        getItem.then(rta => {
            /* console.log(rta) */
            setItem({...rta}) 
            /* console.table(item) */
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <section>
        <div className="container">
        {
            Object.keys(item).length !== 0 ?
            <>
               <h2 className="titulo-seccion">Detalle del Producto N° - {id}</h2>
                <ItemDetail data={item}/>
            </> :
                <p className="cargando">Cargando...</p>
        }
        </div>
      </section>
    );
}

export default ItemDetailContainer;