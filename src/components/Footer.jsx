import { useEffect } from "react"

export default function Footer({user,addReview,removeReview}){
    
    useEffect(()=>{
        localStorage.setItem('reviews',JSON.stringify(user))
    },[user])

    function checkData(){
        if(document.getElementById("name").value !== ""){
            addReview({name:document.getElementById("name").value,review:document.getElementById("review").value})
        }
    }
    return (
       <>
        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <h2 className="text-center">Valoraciones</h2>
                <div className="row">
                    {
                        user.map(item => (
                            <div className="card border border-light col-4" key={item.name}>
                                <div className="card-body">
                                    <h4 className="card-title text-white">{item.name}</h4>
                                    <p className="card-text text-white">{item.review}</p>
                                    <a href="#" className="btn btn-primary">Eliminar</a>
                                </div>
                                <div className="card-footer">
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={()=>removeReview(item.name)}
                                >
                                    X
                                </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <p className="text-white text-center fs-4 mt-4 m-md-0">Escribe tu valoración</p>
                <div className="row d-flex justify-content-center">
                    <input className="col-8 mt-3 rounded" type="text" id="name" placeholder="Introduce tu nombre"/>
                    <textarea className="col-8 mt-3 rounded" id="review" name="textArea" cols="15" rows="3" placeholder="Escribe tu reseña"></textarea>
                    <input type="submit" className="col-8 mt-3"  value={`Publicar`} onClick={() => checkData()}/>
                </div>
                <p className="text-white text-center fs-4 mt-5 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>
       </>
    )
}