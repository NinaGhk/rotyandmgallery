import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterCardProps={
 charVal: Character

;
}


export default function CharacterCard(props:CharacterCardProps){
    return(<div className={"card"}>
            <h3>{props.charVal.id}</h3>
               <h3> {props.charVal.name}</h3>
            <img src ={props.charVal.image}/>
            <p>{props.charVal.status}</p>
             </div>


            )
        }
