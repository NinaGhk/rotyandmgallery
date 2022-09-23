

import {useState} from "react";
import  CharacterCard from "./CharacterCard";
import './CharacterCard.css';
import {Character} from "../model/Character";

type CharacterGalleryProps= {
    characters: Character[];
}

export default function CharacterGallery(props: CharacterGalleryProps) {
    const [filterText, setFiltertext] = useState("")
    const filteredCharacters = props.characters.filter((char) => char.name.includes(filterText))


   return ( <div>
             <input onChange ={(event)=>setFiltertext(event.target.value)}/>
             <p> Typed in:{filterText}</p>
             <div className={"cards"}>
                 {filteredCharacters.map((character:Character)=>
                 <div className={"cards"}>
                     <CharacterCard charVal={character}/>
             </div>)}
         </div></div>
 )}



