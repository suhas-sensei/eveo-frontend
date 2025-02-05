import React from 'react';
import { Play, Twitch, Twitter } from 'lucide-react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

const HeroSection = () => {
  const { isConnected } = useAccount();
  const router = useRouter();

  const handleCreateAgent = () => {
    if (isConnected) {
      router.push("/home");
    }
  };

  return (
    <div className="min-h-screen bg-violet-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Heading */}
          <h1 className="text-center">
            <span className="block text-6xl font-bold" style={{
              color: '#FF69B4',
              textShadow: '2px 2px 0 #4B0082'
            }}>Your personal</span>
            <span className="block text-8xl font-bold" style={{
              color: '#FF69B4',
              textShadow: '2px 2px 0 #4B0082'
            }}>Gameplay</span>
            <span className="block text-7xl font-bold text-indigo-700 mt-2 mr-3" style={{
              textShadow: '2px 2px 0 #4B0082'
            }}> SHILLER</span>
          </h1>

          {/* Email Input */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Type your Twitch username"
                className="w-full px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border-2 border-violet-200 focus:outline-none focus:border-violet-300"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    mounted,
                  }) => {
                    const ready = mounted;
                    const connected = ready && account && chain;

                    return (
                      <div
                        {...(!ready && {
                          'aria-hidden': true,
                          'style': {
                            opacity: 0,
                            pointerEvents: 'none',
                            userSelect: 'none',
                          },
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <button 
                                onClick={openConnectModal}
                                className="px-4 py-1.5 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
                              >
                                Connect Wallet
                              </button>
                            );
                          }

                          return (
                            <button
                              onClick={handleCreateAgent}
                              className="px-4 py-1.5 bg-green-400 text-black rounded-full text-sm hover:bg-green-500 transition-colors"
                            >
                              Create Agent
                            </button>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-gray-600 max-w-md mx-auto">
            We will send you a notification when the ultimate event for
            gamers who love to relive the classics will start.
          </p>

          {/* Watch Previous & Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            {/* Watch Previous Season */}
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Play size={20} />
              Watch the ROADMAP video
            </button>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">
                <Twitch size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;