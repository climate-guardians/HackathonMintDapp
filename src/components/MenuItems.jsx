import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontFamily: "archivo",
        fontSize: "19px",
        fontWeight: "800",
        width: "100%",
        justifyContent: "left",
        paddingLeft: "50px"
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/quickstart">
        <NavLink to="/quickstart">🏦 Home</NavLink>
      </Menu.Item>
      <Menu.Item key="/guardians">
        <NavLink to="/guardians">🏆 Guardians</NavLink>
      </Menu.Item>
      <Menu.Item key="/cards">
        <NavLink to="/cards">🌱 Plants & Trees</NavLink>
      </Menu.Item>
      <Menu.Item key="/game">
        <NavLink to="/game">⚔️ Battle</NavLink>
      </Menu.Item>
      <Menu.Item key="/rewards">
        <NavLink to="/rewards">💰 Rewards</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="onramp">
        <NavLink to="/onramp">💵 Fiat</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">💰 Balances</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">💸 Transfers</NavLink>
      </Menu.Item> */}
      {/* <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">🚀 NFTs</NavLink>
      </Menu.Item> */}
      {/* <Menu.Item key="/1inch">
        <NavLink to="/1inch">🏦 Eco-Marketplace</NavLink>
      </Menu.Item> */}
      {/* <Menu.Item key="/contract">
        <NavLink to="/contract">📄 Contract</NavLink>
      </Menu.Item> */}
    </Menu>
  );
}

export default MenuItems;
