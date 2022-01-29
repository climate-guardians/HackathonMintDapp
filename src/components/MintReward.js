import { Button, Card, Modal } from 'antd';
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { SelectOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
// import climateHeroAbi from "../contracts/ClimateHero";


export default function MintReward() {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  async function mintNft(val){
    
   let options = {
      contractAddress: "0x719DD349E8f14a233Fc594BA837a849F4c709c63",
      functionName: "mint",
      abi: [ 
        {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
      params: {
        id: "0",
        amount: "1",
      },
      msgValue: Moralis.Units.ETH(val)
    }

      await contractProcessor.fetch({
        params: options,
        onSuccess: () => {
        let secondsToGo = 3;
        const modal = Modal.success({
          title: "Success!", 
          content: `Thank you for saving the Amazon. Please accept this huble Protector as your reward:-)`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
        }
      })
    }

    return (
      <Card 
      title="Random Reward NFT" 
      bordered={false}
      style={{ border: "2px solid #e7eaf3" }}
      hoverable
      > 
      <Button onClick={() => mintNft(0.01)} type="primary">Mint Reward NFT</Button>
        <Button type="primary" style={{ marginLeft: "5px" }}>
          <NavLink to="/nftBalance">Check your NFTs</NavLink>
        </Button>
        <div style={{ marginBottom: "2px" }}>
          <a 
            href={`https://rinkeby.etherscan.io/address/0x719DD349E8f14a233Fc594BA837a849F4c709c63`}
            target="_blank"
            rel="noreferrer"
            >
            <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
            View on Etherscan
          </a>
        </div>
        <div style={{ marginBottom: "0px" }}>
          <a 
            href={`https://testnets.opensea.io/assets/0x719DD349E8f14a233Fc594BA837a849F4c709c63`}
            target="_blank"
            rel="noreferrer"
            >
            <SelectOutlined style={{ marginRight: "5px", marginTop: "0px" }} />
            View on OpenSea
          </a>
        </div>
      </Card>
    )}
    