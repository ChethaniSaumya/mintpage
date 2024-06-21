// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';
import { CandyMint } from '../../components/CandyMint';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { Footer } from 'components/Footer';
import { Footer2 } from 'components/Footer2';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <div id="bgC" className="w-full mx-auto flex flex-col items-center">
      <div className="rain-container">
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin" alt="Coin" />
      </div>
      <div className='boxDiv2'>
        <div className='mintCon'>
          <div className='conBanner'>
            LUCKY YOU.<br />
            <span className='hLight'>YOU GOT A FREE NFT</span><br />
            THERE ARE ONLY 150 OF'EM
          </div>

          <div>
            <div className='paragraph'>
              <div>Yup, you lucked out, degen!</div>
              <div>Only 150 of these bad boys exist, and you snagged one!</div>
            </div>

            <div className='paragraph'>
              <div>Why's it a big deal?</div>
              <div>First, you're now one of the muthafuckin’ OGs.</div>
              <div>Second, enjoy 5% cheaper tokens on presale and a 5% boost at TGE. Hell yeah!</div>
            </div>
          </div>

          <button className='mintBtn'>MINT NOW</button>
        </div>
        <div className='mintSection'>
          <div className='mintSectionSub'>
            <div className='imgDiv'><img src="https://muskyassets.pages.dev/imgs/Musky Balzac.png" /></div>
            <div>
              <div className='mintAmountBox'>
                <div className='flexBox'>
                  <div className='total'>Total Minted</div>
                  <div className='percentage'><span className='total'>6%</span> (35/150)</div>
                </div>
                <div className='bar'></div>
                <div className='tSub'>MUSKY BALZAC OF MINT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
