import {
  Card,
  Description,
  Photo,
  Name,
  Text,
  Statlist,
  StatItem,
  Quantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <Card className="profile">
      <Description className="description">
        <Photo src={user.avatar} alt="User avatar" className="avatar" />
        <Name className="name">{user.username}</Name>
        <Text className="tag">{user.tag}</Text>
        <Text className="location">{user.location}</Text>
      </Description>

      <Statlist className="stats">
        <StatItem
          style={{
            borderBottomLeftRadius: '27px',
          }}
        >
          <span className="label">Followers</span>
          <Quantity className="quantity"> {user.stats.followers}</Quantity>
        </StatItem>
        <StatItem
          style={{
            borderRight: '3px solid black',
            borderLeft: '3px solid black',
          }}
        >
          <span className="label">Views</span>
          <Quantity className="quantity"> {user.stats.views}</Quantity>
        </StatItem>
        <StatItem
          style={{
            borderBottomRightRadius: '27px',
          }}
        >
          <span className="label">Likes</span>
          <Quantity className="quantity"> {user.stats.likes}</Quantity>
        </StatItem>
      </Statlist>
    </Card>
  );
};
