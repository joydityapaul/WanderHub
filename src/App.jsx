import { useState, useEffect } from 'react'
import {CssBaseline, Grid} from '@material-ui/core'
import getPlacesData from './api'

import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'


function App() {

  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null)
  const [coordinates, setCoordinates] = useState({})
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
      setCoordinates({ lat:latitude, lng:longitude })
    })
  },[])

  useEffect(()=>{
    getPlacesData(coordinates).then((data)=>{
      setPlaces(data)
    })
  },[coordinates])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
