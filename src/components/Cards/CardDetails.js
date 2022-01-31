import React, { useEffect, useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../redux/actions/cardsActions";
import { Helmet } from "react-helmet"
import { Button } from "antd";


function CardDetails(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cardsReducer);
  const [imgValue, setImageValue] = useState("");

  useEffect(() => {
    dispatch(getCards());
    let value = props.location.pathname
      .replace("/details/static/media/", "")
      .split(".")[0];
    setImageValue(value);
    
  }, [dispatch, props.location.pathname]);

  return (
    <div style={{ paddingTop: "80px" }}>
      {state.map((val) =>
        val.key === imgValue ? (
          <div key={val.key} className="card-details">
            
            <Helmet>
              <title>Card: {val.name}</title>
            </Helmet>
            <img
              src={props.location.pathname.replace("/details", "")}
              alt={props.location.pathname.replace("/details", "")}
            />
            <p>
              <span>Card Name :</span> {val.name}
            </p>
            <p>
              <span>Description</span> : {val.description}
            </p>
            <p>
              <span>Elixir Value</span> : {val.elixir}
            </p>
            <p>
              <span>Type</span> : {val.type}
            </p>
            <p>
              <span>Rarity</span> : {val.rarity}
            </p>
            {/* <p>
              <span>Arena</span> : {val.arena}
            </p> */}
            <Button type="primary">
              <NavLink to="/cards">Back to Cards</NavLink>
            </Button>
            <Button type="primary">
              <NavLink to="/game">⚔️ Defend your Tree!</NavLink>
            </Button>
            <br/>
          </div>
        ) : null
      )}
    </div>
  );
}

export default withRouter(CardDetails);
