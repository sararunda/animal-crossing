export interface VillagersApiItem {
  id: number;
  name: {
    ['name-EUen']: string;
  };
  personality: string;
  ['birthday-string']: string;
  species: string;
  hobby: string;
  image_uri: string;
}
export interface ApiData {
  [key: string]: VillagersApiItem;
}
export interface Villager {
  id: number;
  name: string;
  personality: string;
  birthday: string;
  species: string;
  hobby: string;
  photo: string;
}
