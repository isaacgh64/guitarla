import { useReducer,useEffect } from "react";
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { cartReducer, initialState } from "./reducers/cart-reducer";
import Footer from "./components/Footer";
import useUser from "./hooks/useUser";

function App() {

  const [state,dispatch] = useReducer(cartReducer,initialState)

  const {user,addReview,removeReview} = useUser()

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(state.cart))
  },[state.cart])

  return (
    <>
    <Header
      cart={state.cart}
      dispatch={dispatch}
    />
  
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
            {state.data.map((guitar)=>(
                <Guitar
                  key={guitar.id}
                  guitar={guitar}
                  dispatch={dispatch}
                />
            ))}
        </div>
    </main>

    <Footer
      user={user}
      addReview={addReview}
      removeReview={removeReview}
    />
    </>
  )
}

export default App
