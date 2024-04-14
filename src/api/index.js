import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

async function getPlacesData(coordinates)
{
    try {
        const response = await axios.get(URL, {
          params: {
            latitude: coordinates.lat,
            longitude: coordinates.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'cef09553a5msh7854a047d6ce652p1d81a8jsnc60f3828113c',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return response.data.data;
    }
    catch(error){
        console.log(error);
    }
}

export default getPlacesData;