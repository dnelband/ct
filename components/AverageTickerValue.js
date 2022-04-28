import { useState } from 'react';
import styles from '../styles/Home.module.css';
import GjNumbersView from './GjNumbersView';
import MyResponsiveLine from './MyResponsiveLine';
import { useAppContext } from "../context/AppContext";

import dynamic from 'next/dynamic';

const AverageTickerValue = ({ bitstampData, coinbaseData, bitfinexData }) => {

  const [appState, setAppState] = useAppContext();

  const [high, setHigh] = useState(
    (parseInt(bitstampData['high']) +
      parseInt(bitfinexData[0][9]) +
      parseInt(coinbaseData['data']['rates']['USD'])) /
      3
  );
  const [last, setLast] = useState(
    (parseInt(bitstampData['last']) + parseInt(bitfinexData[0][7])) / 2
  );
  const [bid, setBid] = useState(
    parseInt(bitstampData['bid']) + parseInt(bitfinexData[0][1]) / 2
  );
  const [volume, setVolume] = useState(
    (parseInt(bitstampData['volume']) + parseInt(bitfinexData[0][8])) / 2
  );
  const [low, setLow] = useState(
    (parseInt(bitstampData['low']) + parseInt(bitfinexData[0][10])) / 2
  );
  const [ask, setAsk] = useState(
    (parseInt(bitstampData['ask']) + parseInt(bitfinexData[0][3])) / 2
  );

  const averagesArray = [
    { high },
    { last },
    { bid },
    { volume },
    { low },
    { ask },
  ];

  let myResponsiveLineDisplay;
  if (appState.tradingValueData && typeof window !== 'undefined'){
    myResponsiveLineDisplay = (
      <MyResponsiveLine data={appState.tradingValueData} />
    )
  }

  return (
    <div className={styles.averageContainer}>
      <GjNumbersView list={averagesArray} />
      {myResponsiveLineDisplay}
    </div>
  );
};

export default AverageTickerValue;
