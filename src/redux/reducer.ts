import { AppActions, IAppAction } from './actions/actions';
import { IAppState, initialState } from './state';

export const Reducer = (state: IAppState = initialState, action: IAppAction) => {
  const newState = {...state};
  switch (action.type) {
    case AppActions.UPDATE_WATCHLIST:
      newState.watchlist = action.payload.watchlist;
      return newState;
    default: 
      console.log("something went wrong?");
      return newState;
  }
}