import { selector } from 'recoil';
import { idmStoreAtom } from './atom';

const idmStoreSelector = selector({
  key: 'idmStoreSelector',
  get: ({ get }) => get(idmStoreAtom),
  set: ({ set }, newValue) => set(idmStoreAtom, newValue)
})

export {
  idmStoreSelector
};