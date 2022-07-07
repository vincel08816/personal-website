import styled from "styled-components";
import blockduelers from "../../../assets/applogos/blockduelers.png";
import { ReactComponent as FanfareSVG } from "../../../assets/applogos/fanfare.svg";
import { ReactComponent as LootboxSVG } from "../../../assets/applogos/lootbox.svg";
import { ReactComponent as StockswapSVG } from "../../../assets/applogos/stockswap.svg";
import Row from "./Row";

const BDLogo = <img style={{ height: "50px" }} src={blockduelers} alt="bd" />;

// {!} Change this to display grid later

const Apps = () => {
  return (
    <>
      <h2 style={{ paddingBottom: "5px" }}>Work Experience</h2>
      <Container>
        <Column>
          <Row
            title="Block Duelers"
            link="https://www.blockduelers.io/"
            Logo={BDLogo}
            description="Block Duelers is the first decentralized finance project to create true utility for NFTs by utilizing an ever-evolving dueling platform."
          />
          <Row
            title="Fanfare"
            link="https://www.fanfare.fm/"
            Logo={<FanfareIcon />}
            description="Fanfare is the first Audiocentric NFT marketplace."
            noDivider
          />
        </Column>
        <div style={{ width: "10px" }} />
        <Column>
          <Row
            title="NFT Lootbox"
            link="https://www.nftlootbox.com/"
            Logo={<LootboxIcon />}
            description="An innovative blend of DeFi, NFT, and Loot Box Tech"
          />
          <Row
            title="StockSwap"
            link="https://www.stockswap.app/"
            Logo={<StockswapIcon />}
            description="The most comprehensive stock news, in one Place"
            noDivider
          />
        </Column>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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

export default Apps;
