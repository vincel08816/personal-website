import styled from "styled-components";
import blockduelers from "../../../assets/applogos/blockduelers.png";
import { ReactComponent as FanfareSVG } from "../../../assets/applogos/fanfare.svg";
import { ReactComponent as LootboxSVG } from "../../../assets/applogos/lootbox.svg";
import { ReactComponent as StockswapSVG } from "../../../assets/applogos/stockswap.svg";

const BDLogo = (
  <img
    style={{ height: "75px", margin: "-5px 0 -15px 0" }}
    src={blockduelers}
    alt="bd"
  />
);

const App = ({ Logo, text, link = "/" }) => (
  <AppContainer href={link} target="_blank">
    {Logo}
    {text}
  </AppContainer>
);

// {!} Change this to display grid later
const Apps = () => {
  const Logo = [BDLogo, <FanfareIcon />, <LootboxIcon />, <StockswapIcon />];
  const row1 = [
    { text: "Block Duelers", link: "https://www.blockduelers.io/" },
    { text: "Fanfare", link: "https://www.fanfare.fm/" },
    { text: "NFT Lootbox", link: "https://www.nftlootbox.com/" },
    { text: "Stockswap", link: "https://www.stockswap.app/" },
  ].map((props, index) => <App {...props} Logo={Logo[index]} key={index} />);

  return <AppsContainer style={{ marginTop: "20px" }}>{row1}</AppsContainer>;
};

const FanfareIcon = styled(FanfareSVG)`
  width: 60px;
  height: 60px;
`;

const LootboxIcon = styled(LootboxSVG)`
  width: 60px;
  height: 60px;
`;

const StockswapIcon = styled(StockswapSVG)`
  width: 60px;
  height: 60px;
`;

export default Apps;

const AppsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 600;
`;

const AppContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  aspect-ratio: 1;
  margin: 5px 5px 0 5px;
  border-radius: 20px;
  background-color: #e5e2e3;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
