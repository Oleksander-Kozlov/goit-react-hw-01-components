import {
  Section,
  ListStats,
  ItemStats,
  TitleUploadStats,
  LabelStats,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';
import PropTypes from 'prop-types';

export const StatisticsList = ({ data }) => {
  return (
    <Section className="statistics">
      <TitleUploadStats className="title">Upload stats</TitleUploadStats>
      <ListStats className="stat-list">
        {data
          .filter((item, index, arr) => {
            return arr.findIndex(i => i.label === item.label) === index;
          })
          .map(dat => {
            // console.log(dat.label);
            let randomColor = getRandomHexColor();

            return (
              <ItemStats
                key={dat.id}
                style={{
                  backgroundColor: randomColor,
                }}
              >
                <LabelStats className="label"> {dat.label}</LabelStats>
                <Percentage className="percentage">
                  {' '}
                  {dat.percentage}%
                </Percentage>
              </ItemStats>
            );
          })}
      </ListStats>
    </Section>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
