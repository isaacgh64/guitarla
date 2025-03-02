import { useState } from "react"

export default function useUser(){

    const initialReviews = ()=>{
        const localStorageCart = localStorage.getItem('reviews')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [user,setUser] = useState(initialReviews())

    const addReview = (item) => {
        const userExist = user.find(userFind => userFind.name === item.name)

        if(userExist){
            const updateReview = user.map(userFind => userFind.name === item.name ? {...userFind,review:item.review} : userFind)
            setUser(updateReview)
        }else{
            const newItem  = {...item}
            setUser([...user,newItem])
        }
    }

    const removeReview = (named) => {
        setUser(user.filter(userFind => userFind.name !== named))
    }

    return {
        user,
        addReview,
        removeReview
    }
}