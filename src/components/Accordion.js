import React from 'react'

export default function Accordion() {
  return (
    <>
    <center>
      <h2  className='titleContainer'>Frequently Asked Questions</h2>
    </center>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div className='accordion-border'>
          <button class="accordion">What is the price? When does the minting start?</button>
          <div class="panel">
            <p>
              Price is 1 SOL for each Soloot mint plus Solana tx fees. Minting starts exactly at 5PM PT 17th Sep.
            </p>
          </div>
        </div>
        <div className='accordion-border'>
          <button class="accordion">Is there a pre-sale? Is this a fair mint? How can I verify?</button>
          <div class="panel">
            <p>
              There is no pre-sale. There are no reserve Soloots for creators. All Soloots are available to everyone (including the creators) exactly at the same time which is 5PM PT 17th Sep.<br/><br/>
              We use Metaplex convention and Candy Machine for our fair minting process.<br/><br/>
              You can verify this by looking at the transactions of our Candy Machine Account which we will post 1 hour before launch.
            </p>
          </div>
        </div>
        <div className='accordion-border'>
          <button class="accordion">How do I mint Soloot?</button>
          <div class="panel">
            <p>
              Connect your wallet by clicking on Connect Wallet button. We support Phantom, Solflare, and Sollet currently.<br/><br/>
              Once the timer runs out, you can click on the Mint button and approve the transaction from your wallet extension to mint your Soloot.
            </p>
          </div>
        </div>
        <div className='accordion-border'>
          <button class="accordion">Where can I see my Soloot?</button>
          <div class="panel">
            <p>
              The minting process is asynchronous and after 5 seconds of transaction approval you can see your Soloot appear in NFTs tab in your wallet of choice - Phantom or Solflare.
            </p>
          </div>
        </div>
        <div className='accordion-border'>
          <button class="accordion">Is there a limit on how many Soloot I can mint?</button>
          <div class="panel">
            <p>
              Yes and No. There is a limit of 1 Soloot per mint transaction. However, you can Mint as many as you wish.
            </p>
          </div>
        </div>
        <div className='accordion-border'>
          <button class="accordion">What if something goes wrong?</button>
          <div class="panel">
            <p>
              The whole minting process is done via Candy Machine Solana on-chain program (smart contract). Nothing goes wrong!<br/><br/>
              However, you can contact us on our social handles or our <a href="mailto:support@soloot.art">Support Mail</a> regarding any queries/questions.
            </p>
          </div>
        </div>
        <div className='accordion-border'>
          <button class="accordion">Will there be a community fund?</button>
          <div class="panel">
            <p>
              Yes. We will be placing 20% of all our Mint proceedings and secondary sales royalties into the 'Loot Fund'.<br/><br/>
              These funds will be used to build applications based on Soloot and expand our 'Loot Community'.
            </p>
          </div>
        </div>
        <div className='accordion-border'>
          <button class="accordion">Do I own the Soloot after purchase?</button>
          <div class="panel">
            <p>
              Yes. You own the full intellectual properties of Soloot in your wallet and you are entitiled to earn rewards/bonuses from all the future community products/applications built on top of Soloot.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
