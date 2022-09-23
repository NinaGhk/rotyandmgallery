
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import axios from "axios";

export default function App() {


    const [characters, setCharacters] =useState([]);

    useEffect(()=> {
            axios.get("https://rickandmortyapi.com/api/character")
                .then((response) => {
                    return response.data
                })
                .then((data) => {
                    setCharacters(data.results)
                })
                .catch((error) => {
                    console.error(error())
                })

        }
    ,[])

    return (<div className="App">
            <header/>
            <CharacterGallery characters={characters}/>

        </div>
    );

}






