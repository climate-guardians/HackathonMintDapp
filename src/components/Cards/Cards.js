import React from "react";
import "../../style.css";
import { Route, Link } from "react-router-dom";
import CardDetails from "./CardDetails"; 
import {Helmet} from "react-helmet";
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

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

function Cards() {
 
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../../cards-image", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
    <Typography>
    <Title style={styles.header}>Protect your Forest</Title>
    
    <Title style={styles.subheader}>The Amazon</Title>
    <Paragraph style={styles.content}>
    The Amazon rainforest generates half its own rainfall, but deforestation threatens to disrupt this cycle, shifting large parts of this ancient forest to dry, savanna habitat. Passing such a “tipping point” would have disastrous knock-on effects for climate and weather patterns regionally and globally.
    </Paragraph>
    <Paragraph style={styles.content}>
    A recent study modelling the impact of proposed roads, hydropower and mining developments in the Amazon basin suggests that 21-43 percent of the Amazon’s original extent will be lost by 2050, putting it close to, or beyond, the tipping point for a biome shift in large parts of the region.
    </Paragraph>
    <Paragraph style={styles.content}>
    A quick transition to zero deforestation is the only way to avert catastrophic change to the Amazon, say experts. But conservationists fear the political will is lacking as Bolso continues to slash protections. Only you can make the difference... Gather your Guardians and protect the Amazon!
    </Paragraph>
    </Typography>
    

   
    <div className="cards-container">
      <Helmet>
        <title>Cards</title>
      </Helmet>
      
      {images.map((i) => (
        <div key={i.default}>
          <Link to={"/details" + i.default}>
            <img key={i.default} alt={i.default} width="150" src={i.default} />
          </Link>
          <Route path={"/details" + i.default}>
            <CardDetails />
          </Route>
        </div>
      ))}
    </div>
    </>
  );
}

export default Cards;
