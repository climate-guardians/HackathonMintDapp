import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
// import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
// import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
import Cards from "components/Cards/Cards";
import CardDetails from "components/Cards/CardDetails";
import { Guardians } from "./components/Guardians";
import { EmblaCarousel } from "./components/EmblaCarousel";
const { Header, Footer } = Layout;

const SLIDE_COUNT = 20;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            {/* <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            /> */}
            {/* <NativeBalance /> */}
            <Account />
          </div>
        </Header>
        

        <div style={styles.content}>
          <Switch>
            <Route exact path="/quickstart">
              <QuickStart isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <InchDex chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <InchDex chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <InchDex chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/cards">
              <Cards />
            </Route>
            <Route path="/guardians">
              <Guardians />
            </Route>
            <Route path="/game">
              <EmblaCarousel slides={slides}/>
            </Route>
            <Route path="/details" >
              <CardDetails />
            </Route>
            <Route path="/">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          ⭐️ Please star this{" "}
          <a
            href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            boilerplate
          </a>
          , every star makes us very happy!
        </Text>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    
    <svg width="40" height="45" version="1.1" id="Capa_1" x="0px" y="0px"
	 viewBox="0 0 48.749 48.749"
	 >
<g>
	<g>
		<polygon points="11.582,33.588 9.261,32.534 8.611,32.877 8.009,32.893 8.054,32.266 7.478,31.923 6.659,32.742 7.208,33.417 
			8.395,33.588 9.062,33.938 9.08,34.264 8.647,34.264 8.665,34.93 10.105,34.838 10.629,34.281 11.187,34.227 11.187,35.253 
			12.159,35.253 12.159,34.838 11.672,34.838 		"/>
		<path d="M18.67,12.211l0.09-0.566l-0.585-0.09c0,0.035,0.045,0.656,0.09,0.656S18.67,12.211,18.67,12.211z"/>
		<path d="M35.474,13.945l-0.127,0.332h-0.623v0.318h0.148c0,0,0.009,0.068,0.021,0.158l0.381-0.031l0.236-0.148l0.062-0.297
			l0.308-0.027l0.12-0.251L35.72,13.94L35.474,13.945z"/>
		<polygon points="33.873,14.528 33.849,14.842 34.3,14.804 34.347,14.489 34.075,14.277 		"/>
		<path d="M24.374,0C15.688,0,8.055,4.57,3.737,11.429c-2.363,3.755-3.736,8.191-3.736,12.946c0,0.734,0.038,1.461,0.103,2.18
			c0.14,1.567,0.43,3.092,0.853,4.562c0.218,0.756,0.472,1.495,0.759,2.221c0.571,1.438,1.274,2.81,2.096,4.099
			c1.53,2.4,3.466,4.517,5.714,6.25c0.612,0.471,1.247,0.914,1.903,1.328c0.27,0.168,0.542,0.332,0.818,0.491
			c3.575,2.06,7.714,3.244,12.128,3.244c13.438,0,24.373-10.935,24.373-24.373C48.747,10.935,37.813,0,24.374,0z M34.907,44.107
			l-0.539-0.455l0.055-0.396l0.17-0.484l0.036-0.496l-0.642-0.018l-0.321-0.406l0.531-0.514l0.071-0.387l-0.594-0.17l0.034-0.359
			l0.847-0.129l1.289-0.618l0.432-0.793l1.351-1.728l-0.308-1.353l0.416-0.721l1.24,0.037l0.838-0.66l0.271-2.606l0.927-1.18
			l0.162-0.757l-0.846-0.271l-0.559-0.918l-1.908-0.018l-1.512-0.576l-0.072-1.08l-0.506-0.883l-1.367-0.02l-0.791-1.24
			l-0.702-0.342l-0.036,0.38l-1.277,0.075l-0.469-0.651l-1.332-0.271l-1.099,1.27l-1.729-0.293l-0.126-1.948l-1.26-0.216
			l0.505-0.954l-0.146-0.55l-1.656,1.107l-1.043-0.127l-0.372-0.814l0.228-0.84l0.575-1.06l1.323-0.67l2.556-0.001l-0.008,0.779
			l0.919,0.428L28.39,18.88l0.662-0.666l1.336-0.877l0.092-0.617l1.332-1.387l1.416-0.784l-0.125-0.103l0.959-0.903l0.353,0.093
			l0.161,0.203l0.363-0.404l0.09-0.039l-0.399-0.057l-0.403-0.134v-0.391l0.215-0.176h0.474l0.217,0.095l0.188,0.378l0.229-0.035
			v-0.032l0.064,0.022l0.664-0.104l0.096-0.324l0.377,0.095v0.352l-0.352,0.243h0.002l0.051,0.385l1.203,0.371
			c0,0,0.002,0.005,0.004,0.014l0.275-0.023l0.02-0.521l-0.954-0.434l-0.054-0.251l0.791-0.271l0.035-0.756l-0.826-0.504
			l-0.055-1.277l-1.135,0.558H35.34l0.109-0.973l-1.544-0.364l-0.641,0.482v1.472L32.117,11.6l-0.46,0.959l-0.498,0.08V11.41
			l-1.079-0.148l-0.54-0.352l-0.217-0.796l1.931-1.13l0.945-0.287l0.094,0.634l0.526-0.027l0.041-0.319l0.551-0.078l0.01-0.112
			l-0.236-0.097L33.13,8.36l0.678-0.057l0.408-0.426l0.022-0.031l0.005,0.002l0.125-0.128l1.423-0.18l0.629,0.534l-1.649,0.879
			l2.1,0.494l0.271-0.701h0.918l0.324-0.613l-0.648-0.161V7.198l-2.033-0.9L34.298,6.46l-0.793,0.414l0.055,1.009l-0.828-0.126
			l-0.127-0.559l0.793-0.72l-1.439-0.072l-0.414,0.126l-0.18,0.486l0.539,0.09l-0.107,0.541l-0.918,0.053l-0.145,0.36l-1.332,0.036
			c0,0-0.035-0.756-0.09-0.756s1.043-0.018,1.043-0.018l0.793-0.775l-0.434-0.215L30.14,6.893l-0.955-0.055l-0.576-0.792h-1.225
			L26.106,7h1.17l0.107,0.342L27.078,7.63l1.296,0.036l0.197,0.467L27.112,8.08l-0.071-0.36l-0.917-0.198l-0.487-0.27L23.478,7.27
			l-0.667,0.648l-0.45-0.036l-0.503-0.288l-1.495-0.45h-2.736l-1.584,1.079l-1.062,0.164l-0.487,0.377l0.756,0.113v0.301h-1.619
			L13,9.627l0.81,0.686l2.215,0.018l0.307-0.324h1.854l0.666,0.594l-0.035,0.919l0.558,0.522l-0.468,0.332l0.107,1.215l-1.674,2.035
			v1.908l0.9,0.432v1.714l0.864,1.474l0.701,0.107l0.09-0.504l-0.827-1.279l-0.162-1.241h0.486l0.205,1.278l1.197,1.746l-0.31,0.564
			l0.761,1.164l1.891,0.468v-0.307l0.756,0.108l-0.072,0.539l0.595,0.109l0.918,0.251l1.296,1.478l1.656,0.125l0.161,1.35
			L27.313,27.9l-0.056,1.207l-0.161,0.736l1.639,2.055L28.86,32.6c0,0,0.596,0.16,0.666,0.16c0.072,0,1.334,0.955,1.334,0.955v3.709
			l0.449,0.127l-0.308,1.709l0.757,1.008l-0.14,1.696l0.999,1.757l1.111,0.971c-2.849,1.316-6.017,2.058-9.354,2.058
			c-3.659,0-7.112-0.89-10.164-2.452l0.59-0.387l0.718-0.318l0.722-0.408l-0.267-0.475l-0.391,0.077l-0.011-0.881l-0.717,0.043
			l-0.091,1.379l-0.63,0.43l-0.738,0.103c-0.833-0.471-1.637-0.988-2.399-1.561l0.82-0.771l0.63-1.438l-0.261-1.062l-0.97-0.831
			l-0.073-1.585l-0.641-1.098l-0.575-0.025l-0.234,1.988l-1.101-0.082l-0.307-0.186L8.247,36.42l0.582,0.119l0.491-0.479
			l-1.045-0.629H7.046l-0.882,1.252h-0.36v-0.396l-0.337,0.024c-0.247-0.389-0.484-0.783-0.707-1.188
			c-0.05-0.09-0.097-0.18-0.146-0.271c-0.042-0.08-0.082-0.16-0.124-0.242l0.094,0.029l0.08-0.283H4.36
			c-0.077-0.152-0.153-0.306-0.227-0.461l0.309-0.027l-0.014-1.754l-0.907,0.353c-0.093-0.237-0.182-0.479-0.267-0.721
			c-0.235-0.672-0.44-1.358-0.611-2.058c-0.368-1.504-0.581-3.067-0.627-4.672l0.15-0.056l0.828-0.691l-0.126-1.252l-0.763-0.8
			c0.064-0.669,0.161-1.327,0.283-1.978l1.803,1.375l0.639-0.172l-0.423-0.558l-1.215-0.738l0.072-1.097l1.439,0.001l0.117-1.36
			l-0.549-0.723l0.324-0.351l0.702,0.703l0.225-0.298l-0.9-1.026l-0.945-0.114c0.167-0.407,0.343-0.811,0.533-1.205l0.574,0.051
			l1.945-1.297l0.323,0.406l-0.433,0.675v0.675l1.782,1.457l0.568-0.296l-0.217-0.972l-1.268-1.188l1.673-0.108v-0.486l0.811-0.162
			l-0.621-0.428l0.026-0.328l1.701,0.275l0.324-0.275l-2.296-0.972l-3.048-0.157C10.109,5.781,16.807,2,24.374,2
			c12.337,0,22.373,10.037,22.373,22.375C46.747,32.905,41.947,40.334,34.907,44.107z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

  </div>
);

export default App;
