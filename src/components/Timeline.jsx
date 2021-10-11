import React, { Component } from "react";
import "./Timeline.css";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <center>
          <h2 className="titleContainer2">Roadmap</h2>
        </center>
        <ul className="timeline">
          <li>
            <div className='hideondesktop'>
              <div className="arrow-left"></div>
            </div>
            <div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Q3 2021</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Release our Soloot NFT to mint, get it listed on secondary marketplaces and do collaborations with other NFTs to raise awareness!<br/><br/>
                    Release our initial browser minigame where players can explore a single star system.<br/><br/>
                    Here are some renderings of the game under development: <a href="https://assets.soloot.art/images/render_1.jpg" target="_blank" rel="noreferrer">Render 1</a>, <a href="https://assets.soloot.art/images/render_2.jpg" target="_blank" rel="noreferrer">Render 2</a>, <a href="https://assets.soloot.art/images/render_3.jpg" target="_blank" rel="noreferrer">Render 3</a>.
                  </p>
                </div>
                <div className="timeline-footer">
                  {/* <p className="text-date">Q3 2021</p> */}
                </div>
              </div>
            </div>
            <div className='hideonmobile'>
              <div className="arrow-right"></div>
            </div>
          </li>

          <li className="timeline-inverted">
            <div className="arrow-left"></div>
            <div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Q4 2021</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Use our community fund which comprises of 20% of mint proceedings to get more game designers and game devs on board.<br/><br/>
                    Test initial version of game where users can play as any NFT character from their connected wallet with spacecrafts and weapons from Soloot.
                  </p>
                </div>
                <div className="timeline-footer">
                  {/* <p className="text-date">Q4 2021</p> */}
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className='hideondesktop'>
              <div className="arrow-left"></div>
            </div>
            <div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Q1 2022</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Release alpha version of game to explore the Metaverse filled with millions of procedurally generated planets, stars, galaxies, and various interstellar objects.<br/><br/>
                    Players able to borrow/lend their PFP NFTs and Soloots in-game decentralised on Solana chain. Various leaderboards showcasing how much of the metaverse Players and their PFP Characters have explored.
                  </p>
                </div>
                <div className="timeline-footer">
                  {/* <p className="text-date">Q1 2022</p> */}
                </div>
              </div>
            </div>
            <div className='hideonmobile'>
              <div className="arrow-right"></div>
            </div>
          </li>

          <li className="timeline-inverted">
            <div className="arrow-left"></div>
            <div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Q2 2022</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Release beta version of game with more functionality like users using their Soloot weapons and robots to do various universe building (or destroying) tasks.<br/><br/>
                    Figure out ways to make Play-to-Earn economically sustainable in the long run in our game.
                  </p>
                </div>
                <div className="timeline-footer">
                  {/* <p className="text-date">Q2 2022</p> */}
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className='hideondesktop'>
              <div className="arrow-left"></div>
            </div>
            <div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Q3 2022</h4>
                </div>
                <div className="timeline-body">
                  <p>
                    Release V1.0 of the game with streamlined processes and full functionality of using all available tools & weapons for building or just destroying planets & stars!<br/><br/>
                    Release of in-game currency to make lending and borrowing transactions easier for all the users and make it all decentralised on Solana chain.
                  </p>
                </div>
                <div className="timeline-footer">
                  {/* <p className="text-date">Q3 2022</p> */}
                </div>
              </div>
            </div>
            <div className='hideonmobile'>
              <div className="arrow-right"></div>
            </div>
          </li>
          </ul>
          </div>
    );
  }
}
