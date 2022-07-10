import styled from "styled-components";

const Bar = ({ level, completed, total, beats, color }) => {
  return (
    <BarContainer key={level}>
      <Stats>
        <Level>{level}</Level>
        <Numbers>
          <b>{completed} </b>
          &nbsp;&nbsp;/&nbsp;
          <Grey>{total}</Grey>
        </Numbers>
        <Beats>
          {beats ? (
            <>
              <Grey>Beats</Grey>&nbsp;&nbsp;<b>{beats}%</b>
            </>
          ) : (
            <Grey style={{ opacity: 0.2 }}>Not enough data</Grey>
          )}
        </Beats>
      </Stats>
      <Fullbar color={color} />
      <Progress color={color} percent={(completed / total) * 100} />
    </BarContainer>
  );
};

export const Bars = [
  {
    level: "Easy",
    completed: 26,
    total: 578,
    beats: 58.4,
    color: "rgba(45,181,93)",
  },
  {
    level: "Medium",
    completed: 31,
    total: 1245,
    beats: 65.8,
    color: "rgba(255,184,0)",
  },
  {
    level: "Hard",
    completed: 1,
    total: 511,
    color: "rgba(239,71,67)",
  },
].map((barProps) => <Bar {...barProps} key={barProps} />);

const Grey = styled.div`
  opacity: 0.4;
`;

const Level = styled(Grey)`
  opacity: 0.4;
  flex: 40;
`;

const Stats = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Numbers = styled.div`
  text-align: left;
  display: flex;

  flex: 30;
  b {
    opacity: 100%;
    font-size: 20px;
  }
`;
const Beats = styled.div`
  display: flex;
  justify-content: right;
  flex: 50;
  b {
    font-weight: 500;
  }
`;

const BarContainer = styled.div`
  font-size: 15px;
  padding: 8px 0;
  width: 60%;
`;

const barHeight = 5;

const Fullbar = styled.div`
  border-radius: 9999px;
  height: ${barHeight}px;
  width: 100%;
  background-color: ${(props) => props.color};
  opacity: 15%;
`;

const Progress = styled(Fullbar)`
  margin-top: -${barHeight}px;
  opacity: 1;
  width: ${(props) => props.percent}%;
  position: fixed;
`;
