import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress } from "@material-ui/core";
import Header from "./components/header";
import { useSnackbar } from 'notistack';
import * as anchor from "@project-serum/anchor";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton, WalletDisconnectButton } from "@solana/wallet-adapter-material-ui";
import "./App.css";

import {
  CandyMachine,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const DataContainer = styled.div``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [mintsRemaining, setmintsRemaining] = useState<number>();
  const [mintsTotal, setMintsTotal] = useState<number>();
  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const wallet = useWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const { enqueueSnackbar } = useSnackbar();


  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        enqueueSnackbar('Signing tx... Check your wallet for your Soloot!', {variant: 'default',});
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please check your balance and try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      enqueueSnackbar(message, {variant: 'error',});
    } finally {
      setIsMinting(false);
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      if (wallet && wallet.publicKey) {
        const anchorWallet = {
          publicKey: wallet.publicKey,
          signAllTransactions: wallet.signAllTransactions,
          signTransaction: wallet.signTransaction,
        } as anchor.Wallet;

        const { itemsAvailable, itemsRemaining } =
          await getCandyMachineState(
            anchorWallet,
            props.candyMachineId,
            props.connection
          );
        setIsSoldOut(itemsRemaining === 0);
        setmintsRemaining(itemsRemaining);
        setMintsTotal(itemsAvailable);
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const {
        candyMachine,
        itemsAvailable,
        itemsRemaining,
        goLiveDate,
      } = await getCandyMachineState(
        anchorWallet,
        props.candyMachineId,
        props.connection
      );

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
      setmintsRemaining(itemsRemaining);
      setMintsTotal(itemsAvailable);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  return (
    <main>
      <div className="play-game">
        <a href="https://play.soloot.art/" target="_blank" rel="noreferrer">
          <Button>
            Play Game
          </Button>
        </a>
      </div>

      <div className="disconnect">
        {!wallet.connected ? (
          <ConnectButton>
            Connect
          </ConnectButton>
        ) : (
          [
            <WalletDisconnectButton>
              Disconnect
            </WalletDisconnectButton>,
            <p className="balance-value">
              {(balance || "0").toLocaleString()} SOL - {shortenAddress(wallet.publicKey?.toBase58() || "...")}
            </p>,
          ]
        )}
      </div>
      <Header/>
      <div className="center">
        <div className="cardbox">
          <div className="cardbox-title">
            <p className="get-soloot">Get Soloot Now</p>
          </div>
          <div className="card-body">
            {(
              <DataContainer className="data-container">
                {mintsTotal && [
                    <p className="remaining-mints">
                      Remaining: {(mintsRemaining || 0).toLocaleString()}/
                      {(mintsTotal || 0).toLocaleString()}
                    </p>
                  ]}
              </DataContainer>
            )}

            <MintContainer className="mint-container">
              {
                [
                  <MintButton
                    disabled={isSoldOut || isMinting || !isActive || !wallet.connected}
                    onClick={onMint}
                    variant="contained"
                  >
                    {isSoldOut ? (
                      "SOLD OUT"
                    ) : isActive ? (
                      isMinting ? (
                        <CircularProgress style={{ color: "white" }} />
                      ) : (
                        "MINT FOR 1 SOL"
                      )
                    ) : (
                      <Countdown
                        date={startDate}
                        onMount={({ completed }) =>
                          completed && setIsActive(true)
                        }
                        onComplete={() => setIsActive(true)}
                        renderer={renderCounter}
                      />
                    )}
                  </MintButton>
                ]
              }
            </MintContainer>
          </div>
        </div>
      </div>
    </main>
  );
};


const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
