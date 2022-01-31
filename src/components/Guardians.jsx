import { Button, Card, Col, Row, Typography, Modal } from 'antd';
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { SelectOutlined } from "@ant-design/icons";
import Curupira from "../img/curupira.png";
import Naiara from "../img/naiara.png";
import Politician from "../img/politician.png";

const { Title, Paragraph } = Typography;
const ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "TransferBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "TransferSingle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "value",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "URI",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BOLSO",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "CURUPIRA",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "NAIARA",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      }
    ],
    "name": "balanceOfBatch",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "burnBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "uri",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newuri",
        "type": "string"
      }
    ],
    "name": "setURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
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
    "type": "function",
    "payable": true
  }
];


const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "archivo",
    fontSize: "20px",
    color: "#041836",
    marginTop: "10px",
    padding: "15px",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: "archivo",
    fontSize: "36px",
    letterSpacing: '-1.5px',
    fontWeight: '500',
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: '-1.5px',
  },
  subheader: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "archivo",
    fontSize: "28px",
    color: "#041836",
    marginTop: "10px",
    padding: "5px",
  },
};

export default function Guardians() {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
 
  //mint Curupira
  async function mintCurupira(val){
    
   let options = {
      //contractAddress: "0x190C5D8838072396A75B8cBA622a2C943c29fa08",
      contractAddress: "0xAB0d857D6A9D6ce53A099561D054A731acEE6B0E",
      functionName: "mint",
      abi: ABI,
      params: {
        // account: "msg.sender",
        id: "0",
        amount: "1",
        // data: "",
      },
      msgValue: Moralis.Units.ETH(val)
      }

      await contractProcessor.fetch({
        params: options,
        onSuccess: () => {
        let secondsToGo = 3;
        const modal = Modal.success({
          title: "Success!", 
          content: `Thank you for minting the Protector of the Amazon`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
        }
      })
    }

    //Mint Naiara
    async function mintNaiara(val){
    
      let options = {
         //contractAddress: "0x190C5D8838072396A75B8cBA622a2C943c29fa08",
         contractAddress: "0xAB0d857D6A9D6ce53A099561D054A731acEE6B0E",
         functionName: "mint",
         abi: ABI,
         params: {
           // account: "msg.sender",
           id: "1",
           amount: "1",
           // data: "",
         },
         msgValue: Moralis.Units.ETH(val)
       }
   
         await contractProcessor.fetch({
           params: options,
           onSuccess: () => {
           let secondsToGo = 3;
           const modal = Modal.success({
             title: "Success!", 
             content: `Thank you for minting Naiara;-)`,
           });
           setTimeout(() => {
             modal.destroy();
           }, secondsToGo * 1000);
           }
         })
       }

       //Mint Bolso
       async function mintBolso(val){
    
        let options = {
           //contractAddress: "0x190C5D8838072396A75B8cBA622a2C943c29fa08",
      contractAddress: "0xAB0d857D6A9D6ce53A099561D054A731acEE6B0E",
           functionName: "mint",
           abi: ABI,
           params: {
             // account: "msg.sender",
             id: "2",
             amount: "1",
             // data: "",
           },
           msgValue: Moralis.Units.ETH(val)
         }
     
           await contractProcessor.fetch({
             params: options,
             onSuccess: () => {
             let secondsToGo = 3;
             const modal = Modal.success({
               title: "Success...", 
               content: `Are mad? You minted another villain!`,
             });
             setTimeout(() => {
               modal.destroy();
             }, secondsToGo * 1000);
             }
           })
         }

  return (
    <div>
    <Typography>
    <Title style={styles.header}>Mint & Play Protector or Villain</Title>
    <Row gutter={16}>
    <Col span={8}>
    <Title style={styles.subheader}>Bolso</Title>
    <Paragraph style={styles.content}>
    Land grabbing villain who only loves the smell of money. His goal is simple but evil: destroy the Amazon and make as much money as humanly possible. His evil corporations are a force to be reckoned with.
    </Paragraph>
    
    </Col>
    <Col span={8}>
    <Title style={styles.subheader}>Curupira</Title>
    <Paragraph style={styles.content}>
    Curupira is the mythological protector of the Amazon. His battlecry gathers the animals of the forest for help. Together they defend the Amazon against evil corporations. Lumberjacks tremble with fear when they hear Curupira's battlecry!
    </Paragraph>
    </Col>
    <Col span={8}>
    <Title style={styles.subheader}>Naiara</Title>
    <Paragraph style={styles.content}>
    A girl from a nearby village, fighting to protect the Amazon she loves so much. Has an affinity to plants most people consider weeds. Naiara stops bulldozers in their tracks with her Ivy Trap.
    </Paragraph>
    </Col>
    </Row>
    </Typography>

      <div className="site-card-wrapper">
        <Row gutter={16}>
        <Col span={8}>
            <Card title="Bolso" 
            bordered={false}
            style={{ border: "2px solid #e7eaf3" }}
            hoverable
            cover={<img alt="Politician"  src= {Politician} />}
            >
              <Button onClick={() => mintBolso(0.1)} type="primary">Mint & Play</Button>
              <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnet.snowtrace.io/address/0xab0d857d6a9d6ce53a099561d054a731acee6b0e`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
                  View on Snowtrace
                </a>
                <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnets.opensea.io/assets/0x190C5D8838072396A75B8cBA622a2C943c29fa08/2`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "0px" }} />
                  View on OpenSea
                </a>
                </div>
              </div>
            </Card>
          </Col>
        <Col span={8}>
            <Card 
            title="Curupira" 
            bordered={false}
            style={{ border: "2px solid #e7eaf3" }}
            hoverable
            cover={<img alt="Curupira"  src= {Curupira} />}
            > 
            <Button onClick={() => mintCurupira(0.1)} type="primary">Mint & Play</Button>
              <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnet.snowtrace.io/address/0xab0d857d6a9d6ce53a099561d054a731acee6b0e`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
                  View on Snowtrace
                </a>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnets.opensea.io/assets/0x190C5D8838072396A75B8cBA622a2C943c29fa08/2`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "0px" }} />
                  View on OpenSea
                </a>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Naiara" 
            bordered={false}
            hoverable
            style={{ border: "2px solid #e7eaf3" }}
            cover={<img alt="Naiara"  src= {Naiara} />}
            >
              <Button onClick={() => mintNaiara(0.1)} type="primary">Mint & Play</Button> 
            <div style={{ marginBottom: "10px" }}>
              <a 
                href={`https://testnet.snowtrace.io/address/0xab0d857d6a9d6ce53a099561d054a731acee6b0e`}
                target="_blank"
                rel="noreferrer"
                >
                <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
                View on Snowtrace
              </a>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnets.opensea.io/assets/0x190C5D8838072396A75B8cBA622a2C943c29fa08/1`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
                  View on OpenSea
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>,
    </div>
  );
}

export { Guardians };

