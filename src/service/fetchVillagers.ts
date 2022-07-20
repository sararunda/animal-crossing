//https://acnhapi.com/v1/fish/
import { ApiData, Villager } from '../types/types';

const GetApiData: () => Promise<Villager[]> = () => {
  return fetch('https://acnhapi.com/v1/villagers/')
    .then((response) => response.json())
    .then((data: ApiData) => {
      const dataArray = Object.values(data);
      const dataClean = dataArray.map((item) => {
        return {
          id: item.id,
          name: item.name['name-EUen'],
          personality: item.personality,
          birthday: item['birthday-string'],
          species: item.species,
          hobby: item.hobby,
          photo: item.image_uri,
        };
      });
      console.log(dataClean);
      return dataClean;
    });
};
export default GetApiData;
