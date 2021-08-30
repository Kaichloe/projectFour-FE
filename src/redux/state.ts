import IStock from '../../entities/stock'

export interface IAppState {
  watchlist: IStock[];
}

export const initialState: IAppState = {
  watchlist: [],
}