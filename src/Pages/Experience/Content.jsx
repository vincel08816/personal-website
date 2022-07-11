import styled from "styled-components";
import blockduelers from "../../assets/applogos/blockduelers.png";
import { ReactComponent as FanfareSVG } from "../../assets/applogos/fanfare.svg";
import { ReactComponent as LootboxSVG } from "../../assets/applogos/lootbox.svg";
import { ReactComponent as StockswapSVG } from "../../assets/applogos/stockswap.svg";
import Row from "./Row";

export const BlockDuelers = () => (
  <>
    <P>
      <b>Block Duelers</b>
    </P>
    <P>
      <i>Block Duelers</i> is the first decentralized finance project to create
      true utility for NFTs by utilizing an ever-evolving dueling platform, with
      an integrated wager system to bet on the outcome of live duels! The battle
      platform attaches custom fighting stats to your favorite NFTs. As you
      fight and win duels, the stats of your duelers go up and game changing
      upgrades become available!
    </P>
    {/* <P>
<i>Block Duelers</i> was the first large project I've worked on with
multiple people. There, I accomplished my first merge on the branch,
learned about React lifecycles and dealt with asyncronous code.
</P> */}
    <P>
      <b>Some notable accomplishments</b>
    </P>
    <P>
      <ul>
        <li>
          Mentored new hires, providing comprehensive 1-1 overviews and code
          reviews
        </li>
        <li>
          Configured subdomain to host an administrative dashboard using Heroku
          to assist with monthly airdrops and generating more NFTs to the
          lootbox prizepool
        </li>
        <li>
          Significantly reduced API response and site latency by implementing
          asynchronous smart contract reads, utilizing JavaScript promises
        </li>
      </ul>
    </P>
    <Row
      title="Block Duelers"
      link="https://www.blockduelers.io/"
      Logo={<img style={{ height: "50px" }} src={blockduelers} alt="bd" />}
      description="NFT and Cryptocurrency"
    />
  </>
);

export const Fanfare = () => (
  <>
    <P>
      <b>Fanfare</b>
    </P>
    <P>
      <i>Fanfare</i> is a full-length music NFT platform that support artists
      directly by means of private donations.
    </P>
    <P>
      <b>Some notable accomplishments</b>
    </P>
    <P>
      <ul>
        <li>
          Developed an end-to-end user interface to allow creation of new NFTs
          and image uploads to AWS S3 and MongoDB, using React, Node.js,
          MetaMask
        </li>
        <li>
          Collaborated with UX designer and senior developers to implement
          complete website redesign through Zeplin
        </li>
        <li>
          Designed and implemented a weighted voting system where users’ weights
          were determined by NFT ownership using Node.js
        </li>
      </ul>
    </P>
    <Row
      title="Fanfare"
      link="https://www.fanfare.fm/"
      Logo={<FanfareIcon />}
      description="Fanfare is the first Audiocentric NFT marketplace."
      noDivider
    />
  </>
);

export const Lootbox = () => (
  <>
    <P>
      <b>NFT LootBox</b>
    </P>
    <P>
      <i>NFT LootBox</i> is an innovative Non-Fungible Token (NFT) Project
      allowing users to Stake the LOOT token to earn Coins. Coins can then be
      used to open NFT Loot Boxes. The Loot Boxes contain a variety of NFTs –
      some produced In-House and some from other popular NFT Projects and
      Artists. NFTLootBox.com is a fairer and more exciting way to distribute
      NFTs. Now everyone has a chance to get rare and valuable NFTs.
    </P>
    <P>
      <b>Some notable accomplishments</b>
    </P>
    <P>
      <ul>
        <li>
          Assisted with styling, designing, and creation of the chatbox. Used
          socketIO, styled-components, and keyframes
        </li>
        <li>
          Assisted in various UI tasks such as updating roadmaps and adding
          reference pages as well as polishing pages and fixing bugs
        </li>
      </ul>
    </P>
    <Row
      title="NFT Lootbox"
      link="https://www.nftlootbox.com/"
      Logo={<LootboxIcon />}
      description="An innovative blend of DeFi, NFT, and Loot Box Tech"
    />
  </>
);

export const StockSwap = () => (
  <>
    <P>
      <b>StockSwap</b>
    </P>
    <P>
      <i>StockSwap</i> is a social finance mobile application for investors in
      the stock market. In our MVP, users have the ability to connect their
      brokerage accounts, show off their portfolio, show their trades, post
      blurbs or videos about the market, search individual stock information,
      news articles, and users, and view standings among their friends and
      across the entire app. We give the average trader a fighting chance in a
      world controlled by big banks and hedge funds.
    </P>
    <P>
      <b>Some notable accomplishments</b>
    </P>
    <P>
      <ul>
        <li>
          Developed a dark mode toggle using StyledComponents and MaterialUI,
          which involved redesign of the entire CSS to unify different color
          modes
        </li>
        <li>
          Implemented an infinite scroll for the main newsfeed allowing stock
          news to load continuously
        </li>
        <li>
          Generated personalized Twitter and Reddit feeds based on user’s stock
          preferences
        </li>
        <li>
          Utilized Alpaca API to poll stock portfolios and real time stock data
        </li>
      </ul>
    </P>
    <Row
      title="StockSwap"
      link="https://www.stockswap.app/"
      Logo={<StockswapIcon />}
      description="The most comprehensive stock news, in one place"
    />
  </>
);

export const Content = () => (
  <>
    <BlockDuelers />
    <StockSwap />
    <Lootbox />
    <Fanfare />
  </>
);

const P = styled.div`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;
  color: rgb(0, 0, 0, 0.4);
  b {
    color: black;
  }
`;

const FanfareIcon = styled(FanfareSVG)`
  width: 40px;
  height: 40px;
`;

const LootboxIcon = styled(LootboxSVG)`
  width: 40px;
  height: 40px;
`;

const StockswapIcon = styled(StockswapSVG)`
  width: 40px;
  height: 40px;
`;
