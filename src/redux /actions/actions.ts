import IStock from '../../entities/stock';

export enum AppActions {
  UPDATE_WATCHLIST
}

export interface IAppAction {
  type: AppActions;
  payload: {
    watchlist: IStock[];
  }
}