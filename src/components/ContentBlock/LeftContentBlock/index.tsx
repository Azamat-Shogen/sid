import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { LinkButton } from "../../../common/LinkButton";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

type form = string | any

const LeftContentBlock = ({
  icon,
  title,
  content,
  button,
  section,
  t,
  id,
}: ContentBlockProps) => {


  
  const [applicationForm, setApplicationForm] = useState<form>({});

  useEffect(() => {
    fetch("/applicationForm.json")
    .then(res => res.json())
    .then(data => {
      setApplicationForm(data)
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              
               {button && applicationForm?.hasOwnProperty("application-link") ? 
               <LinkButton name="link" href={applicationForm['application-link']} target="_blank">
                {t(button)}
               </LinkButton>
               : <></>}
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
