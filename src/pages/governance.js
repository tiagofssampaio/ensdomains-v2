import React from "react"
import styled from "@emotion/styled"
import "normalize.css"

import Layout from "../components/Layout"
import Navigation from "../components/Navigationv2"
import mq from "../mediaQuery"

import topography from "../assets/topography.svg"
import discord from "../assets/discord.svg"
import discuss from "../assets/discuss.svg"
import governance from "../assets/governance.svg"
import mirror from "../assets/mirror.svg"
import twitterGrey from "../assets/twitterGrey.svg"
import discordGrey from "../assets/discordGrey.svg"
import discussGrey from "../assets/discussGrey.svg"
import whiteENS from "../assets/whiteENS.svg"
import { useTranslation } from "react-i18next"

import "../css/global.css"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: calc(100% - 120px);
  font-family: JakartaSans;
`

const Content = styled("div")`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  align-self: center;
`

const ContentInner = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;

  ${mq.large`
    padding-top: calc(57% - 120px);
    height: initial;
    overflow-y: initial;
  `}
`

const ContentInnerInner = styled("div")`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 16px;
  max-width: 500px;
  margin: 0 auto;

  ${mq.large`
    grid-template-columns: minmax(0, 4fr) minmax(0, 3fr) minmax(0, 3fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 20px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    padding: 50px;
    max-width: initial;
    margin: initial;
  `}
`

const MainBox = styled("a")`
  background: linear-gradient(330.4deg, #44BCF0 4.54%, #7298F8 59.2%, #A099FF 148.85%);
  border-radius: 30px;
  position: relative;
  height: 300px;
  text-decoration: none;
  transition: all 0.2s ease-in-out; 

  &:hover {
    transform: scale(101%);
  }

  ${mq.large`
    grid-row-start: 1;
    grid-row-end: 3;
    height: initial;
  `}
`

const MainBoxInner = styled("div")`
  background: url("${topography}");
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-size: cover;
`

const MainBoxBottomText = styled("div")`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: -0.5px;
  color: #FFFFFF;
`

const Box = styled("a")`
  background: ${p => p.backgroundColor};
  border: 1px solid ${p => p.borderColor};
  box-sizing: border-box;
  border-radius: 24px;
  height: 200px;
  text-decoration: none;
  transition: all 0.2s ease-in-out; 
  &:hover {
    transform: scale(102%);
  }

  ${mq.large`
    height: initial;
  `}
`

const BoxContent = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 32px;

  ${mq.large`
    padding: 36px;
  `}
`

const MainBoxContent = styled(BoxContent)`
  padding: 36px;
`

const BoxContentTop = styled("div")`

`

const BoxContentBottom = styled("div")`

`

const Footer = styled("div")`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px 20px 0;
  
  &>a {
    margin-right: 10px;    
  }
`

const standardBoxData = [
  {
    icon: discord,
    text: "discord",
    color: "#854BFF",
    backgroundColor: "#E1DAF7",
    borderColor: "#C0B2EA",
    link: 'https://chat.ens.domains/'
  },
  {
    icon: discuss,
    text: "discuss",
    color: "#DE7224",
    backgroundColor: "rgba(238, 148, 83, 0.1)",
    borderColor: "#F8D1B6",
    link: 'https://discuss.ens.domains/'
  },
  {
    icon: governance,
    text: "governance",
    color: "#4D90F1",
    backgroundColor: "rgba(77, 144, 241, 0.1)",
    borderColor: "#B0D0FF",
    link: 'https://docs.ens.domains/v/governance/'
  },
  {
    icon: mirror,
    text: "mirror",
    color: "#2C2C32",
    backgroundColor: "#E8E7EF",
    borderColor: "#D2CFE4",
    link: 'https://ens.mirror.xyz/'
  }
]

const BottomText = styled("div")`
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 34px;

  letter-spacing: -0.01em;
  color: ${p => p.color};
`

const BoxIcon = styled('img')`
`

const StandardBox = ({ color, backgroundColor, text, icon, borderColor, link }) => {
  const { t } = useTranslation()

  return (
    <Box {...{ backgroundColor, borderColor }} href={link} target={"_blank"}>
      <BoxContent>
        <BoxContentTop>
          <BoxIcon
            style={{width: icon === governance ? '40px' : 'initial'}}
            src={icon}
          />
        </BoxContentTop>
        <BoxContentBottom>
          <BottomText {...{ color }}>
            {t(`governance.${text}`)}
          </BottomText>
        </BoxContentBottom>
      </BoxContent>
    </Box>
  );
}

export default function Governance(props) {
  const { t } = useTranslation()

  return (
    <Layout {...props}>
      <Navigation/>
      <Container>
        <Content>
          <ContentInner>
            <ContentInnerInner>
              <MainBox href={"https://claim.ens.domains"} target={"_blank"}>
                <MainBoxInner>
                  <MainBoxContent>
                    <BoxContentTop>
                      <BoxIcon
                        src={whiteENS}
                      />
                    </BoxContentTop>
                    <BoxContentBottom>
                      <MainBoxBottomText>
                        {t("governance.claim")}
                      </MainBoxBottomText>
                    </BoxContentBottom>
                  </MainBoxContent>
                </MainBoxInner>
              </MainBox>
              {standardBoxData.map(StandardBox)}
            </ContentInnerInner>
          </ContentInner>
        </Content>
        <Footer>
          <a href={"https://twitter.com/ensdomains"}>
            <img src={twitterGrey} width="34" css={{marginTop: '2px'}} />
          </a>
          <a href={"https://discuss.ens.domains/"}>
            <img src={discussGrey} width="33" />
          </a>
          <a href={"https://chat.ens.domains/"}>
            <img src={discordGrey} width="30" css={{marginLeft: '4px'}}/>
          </a>
        </Footer>
      </Container>

    </Layout>
  )
}
