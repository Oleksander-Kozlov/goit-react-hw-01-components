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
        <StatItem>
          <span className="label">Followers</span>
          <Quantity className="quantity"> {user.stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <span className="label">Views</span>
          <Quantity className="quantity"> {user.stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <span className="label">Likes</span>
          <Quantity className="quantity"> {user.stats.likes}</Quantity>
        </StatItem>
      </Statlist>
    </Card>
  );
};
