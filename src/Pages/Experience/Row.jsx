import styled from "styled-components";

export default function Row({ Logo, title, description, link, noDivider }) {
  return (
    <RowContainer>
      <LogoContainer>{Logo}</LogoContainer>
      <TextSide>
        <div style={{ display: "flex", marginBottom: "13px" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <RowTitle>{title}</RowTitle>
            <Description>{description}</Description>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href={link} target="_blank" rel="noreferrer">
              GO
            </a>
            <small>See Project Website</small>
          </div>
        </div>
      </TextSide>
    </RowContainer>
  );
}
const RowContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 50px;
  aspect-ratio: 1;
  margin: 0 20px 0 10px;
  background-color: #e6e2e3;
`;

const RowTitle = styled.div`
  font-size: 16px;
  margin: 5px 0 3px;
`;

const Description = styled.p`
  display: block;
  margin: 0;
  font-size: 12px;
  color: #c3c3c3;
  height: 15px;
  width: 15vw;
  max-width: 275px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media only screen and (max-width: 600px) {
    width: 40vw;
  }
`;

const TextSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  div {
  }
  a {
    text-align: center;
    border-radius: 9999px;
    color: #3891fd;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    background-color: #f2f2f7;
    padding: 4px 25px;
    margin: 10px 0 5px;
  }
  small {
    font-size: 8px;
    color: #c3c3c3;
    font-weight: bold;
    text-align: center;
  }
`;
