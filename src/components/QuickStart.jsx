import { Typography, Button, Modal } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";


const { Title } = Typography;

export default function QuickStart() {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  
  async function donation(val){

    let options = {
      contractAddress: "0xCc4D0600885c69Fdba19De5A54957dF939459254",
      functionName: "newDonation",
      abi: [{"inputs":[{"internalType":"string","name":"note","type":"string"}],"name":"newDonation","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {
        note: "Thanks with your work"
      },
      msgValue: Moralis.Units.ETH(val)
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        let secondsToGo = 3;
        const modal = Modal.success({
          title: "Success!", 
          content: `Thank you for the ${val} ETH Donation`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      }
    })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <Title> Donate to the Climate Guardians</Title>
      <div style={{ marginBottom: "10px" }}>
      <a 
        href={`https://rinkeby.etherscan.io/address/0xCc4D0600885c69Fdba19De5A54957dF939459254`}
        target="_blank"
        rel="noreferrer"
        >
        <SelectOutlined style={{ marginRight: "5px" }} />
        View on Etherscan

      </a>
      
      </div>
      <div>
        <Title level={3}>Donate</Title>
        <Button onClick={() => donation(0.1)}>0.1 ETH</Button>
      </div>
      
    </div>
  );
}
