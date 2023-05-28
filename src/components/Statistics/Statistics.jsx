import { Section, ListStats, ItemStats, TitleUploadStats, LabelStats, Percentage} from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';
export const StatisticsList = ({ data }) => {
  
  return (
    <Section className="statistics">
      <TitleUploadStats className="title">Upload stats</TitleUploadStats>
      <ListStats className="stat-list">

        {data.filter((item, index, arr) => {
  if (item.label === ".pdf") {
    return arr.findIndex(i => i.label === ".pdf") === index;
  }
  return true;
}).map(dat => {
          // console.log(dat.label);
          let randomColor = getRandomHexColor()
          
          return (
            <ItemStats
              key={dat.id}
              style={{
                backgroundColor: randomColor,
              }}
            >
              <LabelStats className="label"> {dat.label}</LabelStats>
              <Percentage className="percentage"> {dat.percentage}%</Percentage>
            </ItemStats>
          );
        }
          )}
        
      </ListStats>
    </Section>
  );
};