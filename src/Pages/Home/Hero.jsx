import styled from "styled-components";

/*
{!} Make Buttons Links
{!} Add onHover Effects
{!} Add styling for disabled button
*/

const DownloadButton = ({ children, disabled }) => {
  const ButtonType = disabled ? DisabledButton : StyledDownload;
  return (
    <ButtonType>
      <StyledDownloadSVG
        disabled={disabled}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path>
      </StyledDownloadSVG>
      {children}
    </ButtonType>
  );
};

export const Hero = () => (
  <>
    <h1 style={{ fontSize: "75px", marginBottom: "23px", fontWeight: 900 }}>
      Vincent Lee
    </h1>
    <h2 style={{ fontWeight: "500", textAlign: "center" }}>
      Software Engineer. JavaScript Fullstack. Mongo, Express, Node, ReactJS and
      more.
    </h2>
    <ButtonContainer>
      <DownloadButton>DOWNLOAD VINCENT'S RESUME</DownloadButton>
      <DownloadButton disabled>DOWNLOAD VINCENT'S RESUME</DownloadButton>
    </ButtonContainer>
  </>
);

const ButtonContainer = styled.div`
  display: flex;
  margin: 20px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    height: 125px;
  }
`;

const StyledDownloadSVG = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${({ disabled }) => (disabled ? "rgba(156, 163, 175, 1)" : "white")};
  padding: 0 4px;
`;

const StyledDownload = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: "Open Sans", Arial, sans-serif;
  margin-left: 30px;
  padding: 16px 56px;
  font-size: 14px;
  color: white;
  background-color: #b634e9;

  // change this to onHover later
  border-radius: 9999px;
  border: none;
`;

const DisabledButton = styled(StyledDownload)`
  background-color: #e4e2e3;
  color: rgba(156, 163, 175, 1);
  cursor: not-allowed;
`;
