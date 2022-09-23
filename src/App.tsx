
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
            .then((data)=>{
            setCharacters(data.results)
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

        /*useEffect(()=> {
            axios.post("https://rickandmortyapi.com/api/character")
                .then((response)=>{
                    return response.characters
                })
                .then( (data) {
                console.log(data.result);
              })
                .catch(function (error) {
                  console.log(error);
        });*/
    return (
        <div className="App">
            <header/>
            <CharacterGallery characters={characterResponse.result}/>

        </div>
    );

}


      export default function getAllInfo() {
        return axios.get('/api/character"');
    }

    export default  function getUserPermissions() {
        return axios.get('"https://rickandmortyapi.com/api/location/2ß');
    }

  function getUserAccount() {
    axios.all([getAllInfo(), getUserPermissions()])
        .then(axios.spread( (getAllInfo(), getUserPermissions()) {
        }));
}






