import {useState, useContext} from "react"
import { AppContext } from "../Context"
import Category from "../components/Category"
import CategoryList from "../components/CategoryList"
import CategoryModal from "../components/CategoryModal"
import WordStarCard from "../components/WordStarCard"
import WordStarModal from "../components/WordStarModal"

const Stars = ({catSelected, setCatSelected, showListModal, setShowListModal, wordState, setWordState}) => {
    const [showModal, setShowModal] = useState(false)
    

    const {user} = useContext(AppContext)

    const catMap = user?.categories.map((cat) => <Category setCatSelected={setCatSelected} key={cat.id} category={cat}/>)
    const clickedCat = user?.categories.find((c) => c.id === catSelected.id)
    const wordMap = clickedCat?.words.map((w) => <WordStarCard setWordState={setWordState} key={w.id} word={w} setShowListModal={setShowListModal}/>)
    const singleCat =  <Category setCatSelected={setCatSelected} key={catSelected.id} category={catSelected}/>

    console.log("wordMapo", catSelected)

    return(

        <>
            {catSelected? 
            <div className="star-select-page-container">
                <p id="back-arrow" onClick={() => setCatSelected(false)}>⇦</p>
                <div className="category-container" >
                    
                    {singleCat}
                    <p></p>
                </div>
                <div className="expressions-page-container">
                    {wordMap}
                </div>
             </div> 
             : 
            <div className="category-page-container" >
                 <CategoryList setShowModal={setShowModal}/>
                <div className="category-container" >
                {catMap}
                </div>
                 {showModal && <CategoryModal setShowModal={setShowModal}/>}
                <div className="expressions-page-container">
                    {catSelected && wordMap}
                </div>
                
            </div> }
        </>
    )
}

export default Stars