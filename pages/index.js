import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AverageTickerValue from '../components/AverageTickerValue';
import TradingPairs from '../components/TradingPairs';

export default function Home({
  bitstampData,
  coinbaseData,
  bitfinexData,
  TradingPairsData,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cypto ticker</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <AverageTickerValue
              bitstampData={bitstampData}
              coinbaseData={coinbaseData}
              bitfinexData={bitfinexData}
            />
          </div>

          <div className={styles.wrapper}>
            <TradingPairs TradingPairsData={TradingPairsData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res1 = await fetch('https://www.bitstamp.net/api/v2/ticker/btcusd');
  const res2 = await fetch(
    'https://api.coinbase.com/v2/exchange-rates?currency=BTC'
  );
  const res3 = await fetch(
    'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD'
  );
  const res4 = await fetch(
    'https://www.bitstamp.net/api/v2/trading-pairs-info/'
  );

  const bitstampData = await res1.json();
  const coinbaseData = await res2.json();
  const bitfinexData = await res3.json();
  const TradingPairsData = await res4.json();

  return {
    props: {
      bitstampData,
      coinbaseData,
      bitfinexData,
      TradingPairsData,
    },
  };
};
