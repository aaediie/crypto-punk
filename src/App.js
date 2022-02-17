import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';
function App() {
  const [punkListData , setPunklistData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    const getMyNfts = async() =>{
      const openseaData = await axios.get("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x139f66e115AA95920E230c37A344FB2C86F65716"
      )
      console.log(openseaData.data.assets);
      setPunklistData(openseaData.data.assets);
    }
    return getMyNfts();
  }, [])
  
  return (
  <div className='app'>
    <Header />
    {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>

        )
      }
    
  </div>
  );
}

export default App;
