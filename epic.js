import { FETCHING_DATA } from './constants'
import { getDataSuccess, getDataFailure } from './actions'
import getPeople from './api'
import 'rxjs'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax';

const fetchUserEpic = action$ =>
  action$.ofType(FETCHING_DATA)
    .mergeMap(action =>
      Observable.ajax.getJSON('https://www.googleapis.com/customsearch/v1?key=AIzaSyDgIEqrTKpj_vlOhULzVEBeZ67PrsHrjO8&cx=002863267425170313135:ggwjapyugzu&q=pizza')
        .map(response => getDataSuccess(response.items))
    );

  // action$.ofType(FETCHING_DATA)
  //   .mergeMap(action =>
  //     Observable.fromPromise(getPeople())
  //       .map(response => getDataSuccess(response))
  //       .catch(error => Observable.of(getDataFailure(error)))
      // )

export default fetchUserEpic
