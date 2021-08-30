import React from 'react';
import { FlatList } from 'react-native';

const WatchList = () => {
  const [watchList, setWatchList] = useState();

  useEffect(() =>
    const data = await getAllWatchList();
    
    setWatchList(data);
  ,[])

  return (
    <FlatList>
      
    </FlatList>
  )
}