import React, {useState} from 'react';
import uuid from 'uuid/dist/v4';

const AddProducto = ({crearProducto}) =>{

    const [producto, setProducto] = useState({
        nombre:'',
        precio:'',
        cantidad:''
    });

    const [error, setError] = useState(false);

    const handleState = e => {
        setProducto({...producto,[e.target.name]: e.target.value})
    };

    const {nombre,precio,cantidad} = producto;

    const submitProducto = e =>{
        e.preventDefault();
        if(nombre.trim() === '' || precio.trim() === '' || cantidad.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        producto.id = uuid();
        crearProducto(producto);
        setProducto({
            nombre:'',
            precio:'',
            cantidad:''
        });
    }

    return(
        <div className="card border-dark">
            <h5 className="card-header text-center text-white bg-dark">Agrega productos a la tienda</h5>
            <div className="card-body">
                <form className="row text-center" onSubmit={submitProducto}>
                    <div className="col-lg-4">
                        <label className="visually-hidden">Nombre</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            onChange={handleState}
                            name="nombre"
                            value={nombre}
                        />
                    </div>
                    <div className="col-lg-3">
                        <label className="visually-hidden">Precio</label>
                        <input 
                            type="number"
                            className="form-control"
                            placeholder="Precio"
                            onChange={handleState}
                            name="precio"
                            value={precio}
                        />
                    </div>
                    <div className="col-lg-3">
                        <label className="visually-hidden">Cantidad</label>
                        <input 
                            type="number"
                            className="form-control"
                            placeholder="Cantidad"
                            onChange={handleState}
                            name="cantidad"
                            value={cantidad}
                        />
                    </div>
                    <div className="d-grid col-lg-2 mx-auto">
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </div>
                </form>
                {error?
                <div className="mt-1 mb-0 alert alert-danger" role="alert">
                    Todos los campos son requeridos
                </div>
                :null
                }
            </div>
        </div>
    )
};
 
export default AddProducto;