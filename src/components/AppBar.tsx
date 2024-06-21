import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';
import me from '../assets/magiceden.png';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div id="bgNav" className="navbar flex flex-row md:mb-2 bg-transparent stext-neutral-content">
        <div className="navbar-start align-items-center">
          <div className="hidden sm:inline w-22 h-22 md:p-2 ml-10">
          <img className='logo' src="https://muskyassets.pages.dev/imgs/Musky Balzac.png"/>
           </div>
           <button className='loginMob'>Login</button>
        </div>

        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">
          <img className='me' src="https://muskyassets.pages.dev/imgs/x.png"/>
          <img className='me' src="https://muskyassets.pages.dev/imgs/discord.png"/>
          <img className='me' src="https://muskyassets.pages.dev/imgs/telegram.png"/>

          <button className='login'>Login</button>
        </div>
 
        </div>
      </div>
    </div>
  );
};
