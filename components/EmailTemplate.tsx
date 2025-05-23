import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = () => {
  const siteLogo = process.env.NEXT_PUBLIC_DOMAIN + "/logo-linear.svg";
  return (
    <Html>
      <Head />
      <Preview>{`您已加入 ${process.env.NEXT_PUBLIC_SITE_NAME}的等待名单`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            style={img}
            src={process.env.NEXT_PUBLIC_LOGO || siteLogo}
            width="100"
            height="100"
            alt="Logo"
          />
          <Section>
            <Text
              style={text}
            >{`热烈欢迎并感谢您订阅 ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Text>
            <Text style={text}>
              🚀  我们的使命是发送时尚简洁的资讯，帮助繁忙的创意人士保持更新，而不会让他们的收件箱混乱不堪。
            </Text>
            <Text style={text}>
              🛳 所有新的人工智能资源和工具都经过精心策划，只提供少量最优质的内容。
            </Text>
            <Text style={text}>敬请期待</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const img = {
  paddingTop: "40px",
  margin: "0 auto",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "400",
  color: "#404040",
  lineHeight: "26px",
  // padding: "0 40px",
};

const anchor = {
  textDecoration: "underline",
};
