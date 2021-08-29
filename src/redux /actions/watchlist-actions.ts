import { Dispatch } from "redux";
import { AppActions, IAppAction } from "./actions";
import axios from 'axios';
import IStock from '../../entities/stock'

export const getAllWatchList = () => async(dispatch: Dispatch<IAppAction>) => {
  try {
    const res = await axios.get("http://localhost:3000/api/watchlist");
    dispatch({
      type: AppActions.UPDATE_WATCHLIST,
      payload: {
        watchlist: res.data,
      }
    });
    return "Retrieved all WatchList Stocks"
  } catch (err){
    return err.response.data;
  }
}

export const addStockToWatchList = (stock:IStock) => async(dispatch: Dispatch<IAppAction>) => {
  try {
    const res = await axios.post("http://localhost:3000/api/watchlist",stock);
    dispatch({
      type: AppActions.UPDATE_WATCHLIST,
      payload: {
        watchlist: res.data,
      }
    });
    return `Watching ${stock.companyName}`
  } catch (err){
    return err.response.data;
  }
}

export const deleteStockFromWatchList = (stock:IStock) => async(dispatch: Dispatch<IAppAction>) => {
  const {ticker} = stock;
  try {
    const res = await axios.delete(`http://localhost:3000/api/watchlist/${ticker}`);
    dispatch({
      type: AppActions.UPDATE_WATCHLIST,
      payload: {
        watchlist: res.data,
      }
    });
    return `Removed ${stock.companyName} from WatchList`
  } catch (err){
    return err.response.data;
  }
}
