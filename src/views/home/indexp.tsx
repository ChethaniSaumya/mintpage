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
    <div id="bgC2" className="w-full mx-auto flex flex-col items-center">
     <div className="rain-container">
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
        <img src="https://muskyassets.pages.dev/imgs/Coin.png" className="coin2" alt="Coin" />
      </div>
      <div className='mainBanner'>
        <div>
          <div className='boxDiv'>
            <div className='conBanner'>
              WANNA B RICH?<br />
              <span className='hLight'>WELL FU#KIN' EARN IT*</span><br />
              START BY COMPLETING TASKS.
            </div>
            <div className='buttonAndCon'>
              <div>
                <p className='tasks'><span className='hLight2'>1</span> GOT BALLS? PROVE IT</p>
                <div className='note2'>Let's go Uranus together</div>
              </div>
              <div className='buttonsDiv'><button className='buttons'>Play</button></div>
            </div>

            <div className='buttonAndCon'>
              <p className='tasks'><span className='hLight2'>0</span> FOLLOW US ON X</p>
              <div className='buttonsDiv'><button className='buttons'>Follow</button></div>
            </div>

            <div className='buttonAndCon'>
              <p className='tasks'><span className='hLight2'>0</span> JOIN OUR TG</p>
              <div className='btns2'>
                <div className='buttonsDiv'><button className='buttons'>Join</button></div>
                <div className='buttonsDiv'><button className='verify'>Verify</button></div>
              </div>
            </div>
          </div>
          <div className='notice'><span className='hLight3'>* </span>"earn what ?" you ask, Well, STFU. do your DD by heading to our TH. If you haven't notices,
            that's one of the tasks</div>
        </div>

          <img className='elon' src="https://muskyassets.pages.dev/imgs/Musky-Balzac-no-BG2.png" />
      </div>

    </div>
  );
};
