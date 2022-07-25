import styled from "styled-components";
import { useAdmin } from "../Admin";

const Row = ({ text, guestId, emoji }) => {
  const { selectedId, setSelectedId, chatMap, setMessages } = useAdmin();

  const handleClick = () => {
    setSelectedId(guestId);
    setMessages(chatMap?.get(guestId));
  };

  return (
    <RoomContainer onClick={handleClick} isSelected={guestId === selectedId}>
      <CoverImage src="https://cdn.discordapp.com/emojis/998653442425896970.webp?size=96&quality=lossless" />
      <TextSide>
        <Name>{guestId}</Name>
        <PreviewText>{text || emoji}</PreviewText>
        <Divider />
      </TextSide>
    </RoomContainer>
  );
};

export default function SidebarRows() {
  const { chatMap } = useAdmin();

  return (
    <Container>
      {chatMap
        ?.toArray()
        .sort((a, b) => {
          const aLast = a.value[a.value.length - 1];
          const bLast = b.value[b.value.length - 1];
          return (
            new Date(bLast.updatedAt).getTime() -
            new Date(aLast.updatedAt).getTime()
          );
        })
        .map(({ key, value }) => {
          const { guestId, text, emoji } = value[value.length - 1];

          return <Row key={key} guestId={guestId} text={text} emoji={emoji} />;
        })}
    </Container>
  );
}

const Divider = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 1px;
  background-color: lightgrey;
  bottom: 0;
`;

const TextSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: black;
  padding: 0 4px 0px 4px;
`;

const Name = styled.div`
  padding-bottom: 2px;
  font-size: 14px;
  font-weight: 600;
  height: 20px;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PreviewText = styled.div`
  font-size: 12px;
  opacity: 0.6;
  height: 30px;
  max-width: 100%;
  overflow: hidden;
`;

const CoverImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 0 5px;
`;

const RoomContainer = styled.div`
  display: flex;
  cursor: pointer;
  padding: 10px 5px 0 5px;
  ${(props) => props.isSelected && `background-color: #2873ff4f;`}
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  overflow-y: auto;
`;
