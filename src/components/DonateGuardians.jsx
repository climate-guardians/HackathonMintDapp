import { Typography, Button } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

const { Title } = Typography;

export default function Donate() {
const { Moralis } = useMoralis;
const contractProcessor = useWeb3ExecuteFunction();

async function donation(val){

  let options = {
    contractAddress:"0xCc4D0600885c69Fdba19De5A54957dF939459254",
    functionName: "newDonation",
    abi: [{"inputs":[{"internalType":"string","name":"note","type":"string"}],"name":"newDonation","outputs":[],"stateMutability":"payable","type":"function"}],
    params:{
      note: "Thanks for supporting our Climate Guardians!"
    },
    msgValue: Moralis.Units.ETH(val)
  }

  await contractProcessor.fetch({
    params: options
  })
}

return (
  <div
  style={{display: "flex", flexDirection: "column", }}
  >
  <Title>Donate to the Climate Guardians</Title>
  <div style={{ marginBottom: "10px"}}>
    
  </div>
  <div>
    <Title level={3}>Donate</Title>
    <Button onclick={() => donation(0.1)}>0.1 ETH</Button>
  </div>
  </div>
);
}


