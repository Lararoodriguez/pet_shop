import '../styles/Contact.css';

const Contact = () => {

    return (
        <section className="Contact">
            <div className="container">
                <h2 className="titulo-seccion">Contacto</h2>
                <article className="info">
                    <div>
                        <p><span>Email:</span> <a href="petshot@hotmail.com" >petshop@hotmail.com</a></p>
                    </div>
                    <div>
                        <p><span>Direccion:</span> <a href="https://www.google.com.ar/maps/place/Av.+Asamblea,+C1406+CABA/@-34.6352935,-58.4447637,17z/data=!4m13!1m7!3m6!1s0x95bcca3e57004751:0xdf90532faa4fe4ad!2s7d,+Bogot%C3%A1+849,+Buenos+Aires!3b1!8m2!3d-34.6175208!4d-58.4434815!3m4!1s0x95bccbcada7e0e2b:0x928a4835a47d5a08!8m2!3d-34.6355797!4d-58.4423952" target="_blank">Parque Chacabuco</a></p>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Contact;