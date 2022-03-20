import React, {useEffect, useState } from 'react';
import { ethers } from "ethers";
import {contractABI, contractAddress} from "../constant/constant";
export const Context = React.createContext();

const { ethereum } = window;


const createContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    return transactionsContract;
  };

export const Provider = ({ children }) => {
    console.log("provider")
    const [currentAccount, setCurrentAccount] = useState("")
    const [cards, setCards] = useState([])
    const [transactions, setTransactions] = useState([])
    const [amount, setAmount] = useState()
    const [to, setTo] = useState("")
    const [name, setName] = useState("")
    const [color, setColor] = useState(1)
    const [change, setChange] = useState(false)

    const onChangeTo = (e) => {
        setTo(e.target.value);
      };
    const onChangeAmount = (e) => {
        setAmount(e.target.value);
      };
      
    const onChangeName = (e) => {
        setName(e.target.value);
      };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
      const checkIfWalletIsConnect = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
    
          if (accounts.length) {
            setCurrentAccount(accounts[0]);
    
          } else {
            console.log("No accounts found");
          }
        } catch (error) {
          console.log(error);
        }
      }

      const createCard = async () => {
        try{
            if(ethereum){
            const contract = createContract();
            const cards = await contract.mint(name, color);
            await cards.wait();
            setChange(!change)

        }
        else {
            console.log("plz install metamask")
        }
        } catch(error) {
            console.log(error)
        }
      }


    const getHistory = async () => {
        try{
            if(ethereum){
                const contract = createContract();
                const transactions = await contract.getAllTransaction(); 
                console.log(transactions)
            const structuredTransactions = await Promise.all(transactions.map(async (transaction) => {
                let from = await contract.getCardName(transaction.from)
                let to = await contract.getCardName(transaction.to)
                if(from == '-1'){
                    from = `${transaction.from.slice(0, 7)}...${transaction.from.slice(38)}`
                }
                if(to == '-1'){
                    to = `${transaction.to.slice(0, 7)}...${transaction.to.slice(38)}`
                }
                
                return(
                    {
                        transFrom: from,
                        transTo: to,
                        transAmount: (parseInt(transaction.amount) / (10**18)).toFixed(4),
                        transTime: new Date(transaction.time.toNumber() * 1000).toLocaleString()
                    }
                )
            })
            )
            setTransactions(structuredTransactions)
            console.log(structuredTransactions)
        }
        else {
            console.log("plz install metamask")
        }
        } catch(error) {
            console.log(error)
        }
    }
    const getCardList = async () => {
        try{
            if(ethereum){
            const contract = createContract();
            const cards = await contract.showAllCard(); 
            const structuredCards = cards.map((card) => ({
                cardName: card.name,
                cardColor: card.color,
                cardDate: new Date(card.date.toNumber() * 1000).toLocaleString()
            }))
            setCards(structuredCards)
            console.log(structuredCards)
        }
        else {
            console.log("plz install metamask")
        }
        } catch(error) {
            console.log(error)
        }
    }
    const transfer = async () => {

        try{
            if(ethereum){
            const contract = createContract();
                console.log(amount)
                console.log(to)
            const transfer = await contract.send(ethers.utils.parseEther(amount.toString()), to ,{value: ethers.utils.parseEther(amount.toString())}); 
            await transfer.wait();
            setChange(!change)
         
        }
        else {
            console.log("plz install metamask")
        }
        } catch(error) {
            console.log(error)
        }
    }
    const getBalance = async () => {
        try{
            if(ethereum){
            const contract = createContract();
            const cards = await contract.balanceOf("0x9aC229684BE77Ef087936b3dF877Bf028611F2b9"); 
            console.log(cards)
         
        }
        else {
            console.log("plz install metamask")
        }
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        checkIfWalletIsConnect();
        getCardList();
        getBalance();
        getHistory();
      }, [currentAccount, change]);

      return (
        <Context.Provider
          value={{
            connectWallet,
           currentAccount,
           cards,
           onChangeAmount,
           onChangeName,
           amount,
           name,
           transactions,
           setColor,
           color,
           createCard,
           onChangeTo,
           to,
           transfer,
          }}
        >
          {children}
        </Context.Provider>
      );
};