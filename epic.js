import { FETCHING_DATA } from './constants'
import { getDataSuccess, getDataFailure } from './actions'
import getPeople from './api'
import 'rxjs'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax';

const fetchUserEpic = action$ =>
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

export default fetchUserEpic
