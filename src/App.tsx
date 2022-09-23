
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default function App() {


    const [Characters, setCharacters] =useState([]);

    useEffect(()=> {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response)=>{
            return response.characters
        })
            .then((characters)=>{
            setCharacters(characters.results)
        })
            .catch((error)=>{
            console.error(error())
        });

        axios.get("https://rickandmortyapi.com/api" ,{

             params:{location:20}
    }
            .then((response)=>{
            return response.characters
        })
            .then( (data)=>{
            setCharacters(data.results)
        })
             .catch( (error)=>{
            console.error(error())
        })
    },[])

         useEffect(()=>{
             console.log("i was called!")
         })






    return (
        <div className="App">
            <header/>
            <CharacterGallery characters={characterResponse.result}/>

        </div>
    );

}


