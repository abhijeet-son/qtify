import './App.css';
import Cards from './Components/Cards/Cards';
import HeroSection from './Components/Hero-section/heroSection';
import NavBar from './Components/Navbar/NavBar';
import { useEffect, useState } from 'react';
import { fetchTopAlbums } from './api/api';
import { fetchNewAlbums } from './api/newAlbum';
import Section from './Components/section/section';
import { fetchAllSongs } from './api/allSongs';
import styles from './App.module.css'
import FaqSection from './Components/FAQ-section/Faq-section';

function App() {

  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] =  useState([]);
  const [allSongsData, setAllSongsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) =>{
    console.log(newValue)
    setValue(newValue);
  }
  
  const genrateTopData = async () =>{
    try{
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumData(data);
    }catch(error){
      console.log(error)
    } 
  }

  const genrateNewData = async () =>{
    try{
      const data = await fetchNewAlbums();
      // console.log(data);
      setNewAlbumData(data);
    }catch(error){
      console.log(error)
    } 
  }

  const genrateAllSongData = async () =>{
    try{
      const data = await fetchAllSongs();
      // console.log(data);
      setAllSongsData(data);
      setFilteredData(data);
    }catch(error){
      console.log(error)
    } 
  }

  const filteredDataFun = (value) =>{
    setFilteredData(value)
  }

  const genrateSongData = (value) =>{
    let key;
    if(value === 0){
      filteredDataFun(allSongsData);
      return;
    }
    else if(value === 1) {
      key = "rock";
    }
    else if(value === 2) {
      key = "pop";
    }
    else if(value === 3) {
      key = "jazz";
    }
    else if(value === 4) {
      key = "blues";
    }

    const res = allSongsData.filter(item => item.genre.key === key)
    
    filteredDataFun(res);
    }
  useEffect(() =>{
    genrateSongData(value);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  
   useEffect(() =>{
    genrateTopData();
    genrateNewData();
    genrateAllSongData()
  },[])

  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <div className={styles.sectionWrapper}>
      <Section data = {topAlbumData} type="album" title="Top Albums"/>
      <Section data = {newAlbumData} type="album" title="New Album"/>
      <Section data={filteredData} type="song" title="songs" value={value}  handleChange={handleChange}/>
       </div>
       <FaqSection/>
    </div>
  );

}

export default App;
