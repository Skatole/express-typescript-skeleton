import { flatModel } from '../models/flat';

export interface flatSerializer {
  title: string,
  price: number,
  floorArea: number,
  address: string
};

export const show = (flat: flatModel): flatSerializer => {
  return {
    title: flat.title,
    price: flat.price,
    floorArea: flat.floorArea,
    address: `${flat.country}, ${flat.zip}, ${flat.city}, ${flat.street}`
  }
}

export const index = ( Flats: Array<flatModel>) : Array<flatSerializer> => {
  return Flats.map((flat: flatModel) => show(flat));
}