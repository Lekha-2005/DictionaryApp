import React, { useState } from 'react'

const Search = () => {
    const[search,setSearch]=useState();
    const[data,setData]=useState();
    const handleInput=(event)=>
    {
        setSearch(event.target.value);
    }
    const myfun=async()=>{
        const get= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        const jsondata=await get.json();
        setData(jsondata[0]);
        console.log(jsondata);
    }
  return (
    <>
      <div className='app'>
        <h1>Dictonary App</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type='text' placeholder="Search word..." onChange={handleInput}/>
                <button onClick={myfun}>Search</button>
            </div>
            <div className='datas'>
               {data?
               <div className='datas'>
               <h2> Word : {data.word}</h2>
               <p> Part of Speech: {data.meanings[0].partOfSpeech}</p>
               <p> Definition : {data.meanings[0].definitions[0].definition}</p>
               <p> Synonyms : {data.meanings[0].synonyms[0]}</p>
               <p> Example : {data.meanings[0].definitions[0].example}</p>
               <button onClick={()=> window.open(data.sourceUrls[0],"_blank")}>Read More</button>
                </div>
               : ""

               }
            </div>
        </div>
      </div>
    </>
  )
}

export default Search
