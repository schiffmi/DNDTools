import { GET_MONSTERS, SORT_MONSTERS, FILTER_MONSTERS } from '../actions/types';
import { createSelector } from 'reselect'

const initialState = {
    all: {},
    lists: {'all':[]},
    filter: '',
    sort: 'name', 
    ascending: true,
    selectedList: 'all'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MONSTERS:
      return {...state, all: action.payload.monsters, lists: action.payload.lists };
    case SORT_MONSTERS:
      let newSort = action.payload;
      return {...state, sort: newSort, ascending: newSort !== state.sort ? true : !state.ascending};
    case FILTER_MONSTERS:
      return {...state, filter: action.payload}    
    default:
      return state;
  }
}


const getAllMonsters = (state) => state.all;
const getAllLists = (state) => state.lists;
const getSortString = (state) => state.sort;
const getOrder = (state) => state.ascending;
const getSelectedList = (state) => state.selectedList;
const getFilter = (state) => state.filter;

export const getSortedMonsters = createSelector(
  [ getAllMonsters, getAllLists, getSortString, getOrder, getSelectedList, getFilter ],
  ( allMonsters, lists, sort, ascending, selectedList, filter) => {
    const item = id => allMonsters[id];

    let sortString = sort;
    let asc = ascending;
    let sortedList;
    switch (sortString){
      case 'name':
        sortedList = [...lists[selectedList]].sort( (a, b) => {
          return asc ? item(a)[sortString].localeCompare(item(b)[sortString]) : item(b)[sortString].localeCompare(item(a)[sortString])
        });
        break;
      case 'challenge_rating':
        let challenge = cr => {
          let split = cr.split('/');
          if (split.length === 1) return parseFloat(split[0].trim());
          else {
            return parseFloat(split[0].trim()) / parseFloat(split[1].trim());
          }
        }
        sortedList = [...lists[selectedList]].sort( (a, b) => {
            return asc ? challenge(item(a)[sortString]) - challenge(item(b)[sortString]) : challenge(item(b)[sortString]) - challenge(item(a)[sortString])
          });
        break;
      default:
        sortedList = [...lists[selectedList]].sort( (a,b) => {
          return asc ? 
            (allMonsters[a])[sortString] - (allMonsters[b])[sortString] : (allMonsters[b])[sortString] - (allMonsters[a])[sortString];
          });
        break;
    }
    return sortedList.map(id => allMonsters[id]).filter(monster => monster.name.toLowerCase().includes(filter));
  }
)


// export const getSortedMonsters = (state) => {
//   const item = id => state.all[id];

//   let sortString = state.sort;
//   let asc = state.ascending;
//   let sortedList;
//   switch (state.sort){
//     case 'name':
//       sortedList = [...state.lists[state.selectedList]].sort( (a, b) => {
//         return asc ? item(a)[sortString].localeCompare(item(b)[sortString]) : item(b)[sortString].localeCompare(item(a)[sortString])
//       });
//       break;
//     case 'challenge_rating':
//       let challenge = cr => {
//         let split = cr.split('/');
//         if (split.length === 1) return parseFloat(split[0].trim());
//         else {
//           return parseFloat(split[0].trim()) / parseFloat(split[1].trim());
//         }
//       }
//       sortedList = [...state.lists[state.selectedList]].sort( (a, b) => {
//           return asc ? challenge(item(a)[sortString]) - challenge(item(b)[sortString]) : challenge(item(b)[sortString]) - challenge(item(a)[sortString])
//         });
//       break;
//     default:
//       sortedList = [...state.lists[state.selectedList]].sort( (a,b) => {
//         return asc ? 
//           (state.all[a])[sortString] - (state.all[b])[sortString] : (state.all[b])[sortString] - (state.all[a])[sortString];
//         });
//       break;
//   }
    // console.log('reselected');
//   return sortedList.map(id => state.all[id]).filter(monster => monster.name.toLowerCase().includes(state.filter));     
// }