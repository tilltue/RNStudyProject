// LoadImage.js
import { createAction, handleActions } from 'redux-actions'
import 'rxjs'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax';

// Action Type
const FETCHING_DATA = 'profile/FETCHING_DATA'
const FETCHING_DATA_SUCCESS = 'profile/FETCHING_DATA_SUCCESS'
const FETCHING_DATA_FAILURE = 'profile/FETCHING_DATA_FAILURE'

// 검색엔진 ID 002863267425170313135:ggwjapyugzu
//API Key AIzaSyDgIEqrTKpj_vlOhULzVEBeZ67PrsHrjO8
// Actions
export const loadImage = createAction(FETCHING_DATA) //query
export const getDataSuccess = createAction(FETCHING_DATA_SUCCESS) //data
export const getDataFailure = createAction(FETCHING_DATA_FAILURE) //error

// initialState
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

// Reducer
export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

// Epics
export const loadImageEpic = action$ =>
  action$.ofType(FETCHING_DATA)
    .mergeMap(action =>
      Observable.ajax.getJSON('https://api.fixer.io/latest')
        .map(response => getDataSuccess(response))
    );

  // action$.ofType(FETCHING_DATA)
  //   .mergeMap(action =>
  //     Observable.fromPromise(getPeople())
  //       .map(response => getDataSuccess(response))
  //       .catch(error => Observable.of(getDataFailure(error)))
      // )
