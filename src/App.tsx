import { useMemo } from "react";
import Home from "./Home";
import Timeline from "./components/Timeline";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
// importing components
import Accordion from "./components/Accordion";
import Footer from "./components/footer";
import Image from "./components/image";

// declaring variables
const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);
const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);
const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);
const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

// TODO: check this?
const txTimeout = 60000; // milliseconds (confirm this works for your project)
const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );
  return (
    <>
      <div className="main-page">
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletDialogProvider>
              <Home
                candyMachineId={candyMachineId}
                config={config}
                connection={connection}
                startDate={startDateSeed}
                treasury={treasury}
                txTimeout={txTimeout}
              />
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
      <div className="Timeline">
        <Timeline></Timeline>
      </div>
      <div className="Image">
        <Image></Image>
      </div>
      {/* accordion section */}
      <div className="accordiondiv">
        <Accordion></Accordion>
      </div>
      {/* footer section */}
      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
