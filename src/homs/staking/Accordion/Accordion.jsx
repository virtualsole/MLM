import React from "react";
import "./Accordion.css";
// import Line from "../../assets/UnderLine-01.svg";

import {Accordion} from "react-bootstrap";
const accordionData = [
  {
    title: "What is staking?",
    key: 1,
    detail:
      "Staking allows you to earn rewards for holding tokens on a blockchain network.",
  },
  {
    key: 2,
    title:
      "How does staking benefit me?",
    detail:
      "Staking ZIL is a great way to put your ZIL to use and earn rewards while contributing to the network.",
  },
  {
    key: 3,
    title: "What is a seed node? ",
    detail:
      "A seed node is a specific node that logs the history of the blockchain network. It allows other seed nodes to locate and synchronise the blockchain's data so more nodes can join.",
  },
  {
    key: 4,
    title: "What is a Staked Seed Node Operator (SSN)?",
    detail:
      "You delegate your tokens to an SSN, helping them become an active node on the network if they have a minimum of ten million ZIL staked.",
  },
  {
    key: 5,
    title: "What happens if a SSN operator fails?",
    detail:
      "If a seed node goes down, it will not impact your stake. You will not earn any rewards, but your stake remains intact, so your funds will remain safe.",
  },
  {
    key: 7,
    title: "Can I switch SSN providers?  ",
    detail:
      "Yes - you can change your seed node operator at any time.",
  },
  {
    key: 8,
    title: "Why is there a minimum lock-up period for my stake? ",
    detail:
      "The lock-up period (aka bonding) is approximately 14 days. This incentivises longer-term holders to stake ZIL and encourages token holders to secure the network,",
  },
  {
    key: 9,
    title: "Want to change the unbonding period?",
    detail:
      "If you want to change your unbonding period, please submit a governance change with a Zilliqa Improvement Proposal (ZIP).",
  },
];


function AllCollapseExample() {
  return (
    <div className="container">
      <div className="row justify-content-center">
    
        
        <div className="row justify-content-between ">
          <div className="col-lg-6 col-md-12 col-sm-12">
            {
            accordionData.map((data, index) => {
              return (
                <>
                  <div
                    className="col-lg-12 col-md-12 col-sm-12 mb-4"
                    key={index}
                  >
                    <Accordion className="accordion-bg responsive" style={{ width: "532px"}}>
                      <div className="col-md-12">
                        <Accordion.Item
                          eventKey={data.key}
                          className=" accordion-bg"
                        >
                          <Accordion.Header className="accordion-bg">
                            {data.title}
                          </Accordion.Header>
                          <Accordion.Body style={{ background: "#5cfff3", color: "#000"}}>{data.detail}</Accordion.Body>
                        </Accordion.Item>
                      </div>
                    </Accordion>
                  </div>
                </>
              );
            })}
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default AllCollapseExample;
