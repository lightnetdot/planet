import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import planetData from "/data.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  min-height: 100vh;
  background-color: #070724;
  color: white;
  padding: 2rem;
  font-family: 'Antonio', sans-serif;
  text-align: right;
  position: relative;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 5rem;
  font-family: "Antonio" medium;
  position: relative;
  top: -100px;
`;

const Description = styled.div`
  padding: 1.5rem;
  max-width: 600px;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 300;
  margin-right: 5rem;
  position: relative;
  top: -130px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 7px;
  gap: 10px;
  position: fixed;
  top: 320px;
  right: 140px;
`;

const Button = styled.button`
  background: ${({ active }) => (active ? "#419EBB" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "rgba(255, 255, 255, 0.5)")};
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 14px;
  width: 350px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #38384F;
    color: #fff;
  }
`;

const Image = styled.img`
  width: 250px;
  position: absolute;
  left: 15%;
  top: 40%;
  transform: translateY(-50%);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: left;
  margin-right: 25rem;
  margin-top: 70px;
  font-size: 20px;

`;

const InfoBox = styled.div`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 1px;
  width:  200px;
  height: 110px;
`;

const Label = styled.p`
  font-size: 12px;
  opacity: 0.6;
  font-weight: bold;
`;

const Value = styled.p`
  font-size: 24px;
  font-weight: 400;
`;

const Planet = () => {
  const { planetName } = useParams();
  const [planet, setPlanet] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const foundPlanet = planetData.find(p => p.name.toUpperCase() === planetName.toUpperCase());
    if (foundPlanet) {
      setPlanet(foundPlanet);
    }
  }, [planetName]);

  if (!planet) {
    return <h1>Planet not found</h1>;
  }

  return (
    <Container>
      <ButtonContainer>
        <Button active={activeTab === "overview"} onClick={() => setActiveTab("overview")}>01 OVERVIEW</Button>
        <Button active={activeTab === "structure"} onClick={() => setActiveTab("structure")}>02 INTERNAL STRUCTURE</Button>
        <Button active={activeTab === "geology"} onClick={() => setActiveTab("geology")}>03 SURFACE GEOLOGY</Button>
      </ButtonContainer>
      <Title>{planet.name}</Title>
      <Description>
        <p>{planet[activeTab].content}</p>
      </Description>
      <Image src={planet.images.planet} alt={planet.name} />
      <InfoGrid>
        <InfoBox>
          <Label>ROTATION TIME</Label>
          <Value>{planet.rotation}</Value>
        </InfoBox>
        <InfoBox>
          <Label>REVOLUTION TIME</Label>
          <Value>{planet.revolution}</Value>
        </InfoBox>
        <InfoBox>
          <Label>RADIUS</Label>
          <Value>{planet.radius}</Value>
        </InfoBox>
        <InfoBox>
          <Label>AVERAGE TEMP.</Label>
          <Value>{planet.temperature}</Value>
        </InfoBox>
      </InfoGrid>
    </Container>
  );
};

export default Planet;
