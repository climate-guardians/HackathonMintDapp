import { Button, Card, Col, Row } from 'antd';
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { SelectOutlined } from "@ant-design/icons";
// import climateHeroAbi from "../contracts/ClimateHero";
import Curupira from "../img/curupira.png";
import Naiara from "../img/naiara.png";
import Politician from "../img/politician.png";

export default function Guardians() {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  async function mintCurupira(val){
    
   let options = {
      contractAddress: "0x190C5D8838072396A75B8cBA622a2C943c29fa08",
      functionName: "mint",
      abi: [
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
      ],
      params: {
        // account: "msg.sender",
        id: 1, 
        amount: 1
        // data: "",
      },
      msgValue: Moralis.Units.ETH(val)
    }

      await contractProcessor.fetch({
        params: options
      })
    }

    // async function mintBolso(val){
    
    //   let options = {
    //      contractAddress: "0xE351044ffE80F41Cb965B31B8Db1667338d3A779",
    //      functionName: "mint",
    //      abi: [],
    //      params: {
    //        account: "msg.sender",
    //        id: 2, //Bolso
    //        amount: 1,
    //        data: "",
    //      },
    //      msgValue: Moralis.Units.ETH(val)
    //    }
   
    //      await contractProcessor.fetch({
    //        params: options
    //      })
    //    }

  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
        <Col span={8}>
            <Card title="Politician" 
            bordered={false}
            style={{ height: 800, border: "2px solid #e7eaf3" }}
            hoverable
            cover={<img alt="Politician"  src= {Politician} />}
            >
              <Button onClick={() => mintCurupira(0.1)} type="primary">Mint & Play</Button>
              <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://rinkeby.etherscan.io/address/0x190C5D8838072396A75B8cBA622a2C943c29fa08`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
                  View on Etherscan
                </a>
                <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnets.opensea.io/assets/0x190C5D8838072396A75B8cBA622a2C943c29fa08/2`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
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
            style={{ height: 800, border: "2px solid #e7eaf3" }}
            hoverable
            cover={<img alt="Curupira"  src= {Curupira} />}
            > 
            <Button onClick={() => mintCurupira(0.1)} type="primary">Mint & Play</Button>
              <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnets.opensea.io/assets/0x190c5d8838072396a75b8cba622a2c943c29fa08/0`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
                  View on Etherscan
                </a>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnets.opensea.io/assets/0x190C5D8838072396A75B8cBA622a2C943c29fa08/2`}
                  target="_blank"
                  rel="noreferrer"
                  >
                  <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
                  View on OpenSea
                </a>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Naiara" 
            bordered={false}
            hoverable
            style={{ height: 800, border: "2px solid #e7eaf3" }}
            cover={<img alt="Naiara"  src= {Naiara} />}
            >
              <Button type="primary">Mint & Play</Button>
            <div style={{ marginBottom: "10px" }}>
              <a 
                href={`https://testnets.opensea.io/assets/0x190c5d8838072396a75b8cba622a2c943c29fa08/1`}
                target="_blank"
                rel="noreferrer"
                >
                <SelectOutlined style={{ marginRight: "5px", marginTop: "5px" }} />
                View on Etherscan
              </a>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <a 
                  href={`https://testnets.opensea.io/assets/0x190C5D8838072396A75B8cBA622a2C943c29fa08/2`}
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

