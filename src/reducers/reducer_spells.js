import { GET_SPELLS, SORT_SPELLS, FILTER_SPELLS  } from '../actions/types';
import { createSelector } from 'reselect';

const initialState = {
    all: {},
    lists: {'all': []},
    filter: '',
    sort: 'name',
    ascending:true,
    selectedList: 'all'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SPELLS:
      return {...state, all: action.payload.spells, lists: action.payload.lists };
    case SORT_SPELLS:
      let newSort = action.payload;
      return {...state, sort: newSort, ascending: newSort !== state.sort ? true : !state.ascending};
    case FILTER_SPELLS:
      return {...state, filter: action.payload}    
    default:
      return state;
  }
}


const allSpells = (state) => state.all;
const sortString = (state) => state.sort;
const ascending = (state) => state.ascending;
const lists = (state) => state.lists;
const selectedList = (state) => state.selectedList;
const filter= (state) => state.filter;

export const getSortedSpells = createSelector(
  [allSpells, sortString, ascending, lists, selectedList, filter], 
  (allSpells, sortString, ascending, lists, selectedList, filter) => {
    const item = id => allSpells[id];
    
    let sortedList;
    switch (sortString){
      //    case 'name':
      default:
      sortedList = [...lists[selectedList]].sort( (a, b) => {
        return ascending ? item(a)[sortString].localeCompare(item(b)[sortString]) : item(b)[sortString].localeCompare(item(a)[sortString])
      });
        break;
      //   default:
      //     sortedList = [...state.lists[state.selectedList]].sort( (a,b) => {
      //       return asc ? 
      //         (state.all[a])[sortString] - (state.all[b])[sortString] : (state.all[b])[sortString] - (state.all[a])[sortString];
      //       });
      //     break;
      }
      return sortedList.map(id => allSpells[id]).filter(spell => spell.name.toLowerCase().includes(filter));     
    }
);

// export const getSortedSpells = (state) => {
//   const item = id => state.all[id];
//   let sortString = state.sort;
//   let asc = state.ascending;
//   let sortedList;
//   switch (state.sort){
//       //    case 'name':
//       default:
//       sortedList = [...state.lists[state.selectedList]].sort( (a, b) => {
//         return asc ? item(a)[sortString].localeCompare(item(b)[sortString]) : item(b)[sortString].localeCompare(item(a)[sortString])
//       });
//       break;
//   //   default:
//   //     sortedList = [...state.lists[state.selectedList]].sort( (a,b) => {
//   //       return asc ? 
//   //         (state.all[a])[sortString] - (state.all[b])[sortString] : (state.all[b])[sortString] - (state.all[a])[sortString];
//   //       });
//   //     break;
//   }
//   return sortedList.map(id => state.all[id]).filter(spell => spell.name.toLowerCase().includes(state.filter));     
// }