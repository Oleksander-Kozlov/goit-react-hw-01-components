import styled from "styled-components";
export const Card = styled.div`
width: 600px;
margin: auto;
text-align: center;
background-color: white;
border-radius: 4px;
box-shadow: 2px;
`
export const Description = styled.div`
background-color: aquamarine;
padding: 50px;
border-radius: 4px;
`
export const Photo = styled.img`
width: 200px;
border-radius: 50%;
border: 2px solid purple ;
`
export const Name = styled.p`
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: 42px;
font-weight: bold;`

export const Text = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 36px;
  color: rgba(149, 137, 137, 0.803);
`;
export const Statlist = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: gray;
`;
export const StatItem = styled.li`
display: flex;
flex-direction:column;
border: 1px solid black;
`
export const Quantity = styled.span`
font-weight: bold;
`

