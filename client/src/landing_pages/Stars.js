import {useState, useContext, useEffect} from "react"
import { AppContext } from "../Context"
import Category from "../components/Category"
import CategoryList from "../components/CategoryList"
import CategoryModal from "../components/CategoryModal"
import WordStarCard from "../components/WordStarCard"

const Stars = ({catSelected, setCatSelected, setShowListModal, setWordState}) => {
    const [showModal, setShowModal] = useState(false)
    
    const {user, isLogged} = useContext(AppContext)

    const catMap = user?.categories?.map((cat) => <Category setCatSelected={setCatSelected} key={cat.id} category={cat}/>)
    
    const wordMap = catSelected?.words?.map((w) => <WordStarCard setWordState={setWordState} key={w.id} word={w} setShowListModal={setShowListModal}/>)
    
    const singleCat =  <Category setCatSelected={setCatSelected} key={catSelected.id} category={catSelected}/>

    return(

        <>
        {isLogged? 
        <>
            {catSelected? 
            <div className="star-select-page-container">
                <div className="category-selected-container">
                <p id="back-arrow" onClick={() => setCatSelected(false)}>⇦</p>
                <div className="category-container" >
                    {singleCat}
                </div>
                </div>
                <div className="expressions-page">
                    <div className="expressions-page-container">
                        {wordMap}
                    </div>
                </div>
             </div> 
             : 
            <div className="category-page-container" >
                 <CategoryList setShowModal={setShowModal}/>
                <div className="category-container" >
                {catMap}
                </div>
                 {showModal && <CategoryModal setShowModal={setShowModal}/>}
            </div> }
        </>
            :
            <div className="landing-page">
            <p>Please Login</p> 
        </div>}


        </>
    )
}

export default Stars