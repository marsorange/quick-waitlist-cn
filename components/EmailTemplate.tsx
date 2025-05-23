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
      <Preview>{`您已加入${process.env.NEXT_PUBLIC_SITE_NAME}的等待名单`}</Preview>
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
            <Text style={text}>
            亲爱的朋友，
            </Text>
            <Text
              style={text}
            >{`感谢您关注 ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Text>
            <Text style={text}>
            我是半己的创始人，感谢您对我们使命的认可——
            <span style={{ fontWeight: "bold" }}>用最简单的方式，让每个人都能轻松获得数据洞察。</span>
            所有功能我们都在精心打磨，只为呈现真正有用、好用、优雅的工具。
            🚀 您已成功加入等待列表，我们将在产品上线前第一时间通知您，并为您准备了更多的免费额度。
            </Text>
            <Text style={text}>敬请期待！</Text>
            <Text style={text}>
            彭博 半己创始人 
            </Text>
            <Text style={text}>
              <a href="https://banjee.cn" style={anchor}>
                banjee.cn
              </a>
            </Text>
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
  fontSize: "14px",
  fontFamily:
    "'PingFang SC', 'Microsoft YaHei', '微软雅黑', 'Hiragino Sans GB', 'STHeiti', 'WenQuanYi Micro Hei', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: "400",
  color: "#404040",
  lineHeight: "24px",
  // padding: "0 40px",
};

const anchor = {
  textDecoration: "underline",
};
