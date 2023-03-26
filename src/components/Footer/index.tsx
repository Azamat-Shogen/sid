import { Row, Col, List } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import ContactContent from "../../content/ContactContent.json";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  ListItem,
  Title2,
  ItemSpan
  
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" className="cj-1" >
            <Col lg={12} md={12} sm={12} xs={24} >
              <Language>{t("Contact Us")}</Language>
              <List>
                <ListItem>Phone: <ItemSpan>{ContactContent.phone}</ItemSpan></ListItem>
                <ListItem>Email: <ItemSpan>{ContactContent.email}</ItemSpan></ListItem>
                <ListItem>Fax: <ItemSpan>{ContactContent.fax}</ItemSpan></ListItem>
              </List>
            
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}>
              <Title>{t("Services")}</Title>
              <List>
                <ListItem>Oversize permits</ListItem>
                <ListItem>Overweight permits</ListItem>
                <ListItem>Superload permits</ListItem>
              </List>
            </Col>
          </Row>
        
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
              <SvgIcon src="sid-logo2.svg" width="121px" height="64px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="#"
                src="facebook.svg"
              />
              <SocialLink
                href="#"
                src="twitter.svg"
              />
              <SocialLink
                href="#"
                src="instagram.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
