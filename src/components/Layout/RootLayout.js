import { Button, Layout, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import { Icon } from "@iconify/react";
import Banner from "../Ui/Banner";

const RootLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div className="w-[100%] flex justify-between items-center text-white">
          <h1 className="text-3xl font-semibold">DevBlog</h1>
          <div>
            <Link href="/" className="mr-4">
              <Button type="dashed" ghost>
                Home
              </Button>
            </Link>
            <Link href="/" className="mr-4">
              <Button type="dashed" ghost>
                Blog
              </Button>
            </Link>
            <Link href="/" className="mr-4">
              <Button type="dashed" ghost>
                About
              </Button>
            </Link>
            <Link href="/" className="mr-4">
              <Button type="dashed" ghost>
                Contact
              </Button>
            </Link>
          </div>
          <div className="flex">
            <Icon icon="line-md:facebook" width="30" className="mr-2" />
            <Icon icon="line-md:twitter" width="30" className="mr-2" />
            <Icon icon="line-md:instagram" width="30" />
            {/* <h1>Social Icon</h1> */}
          </div>
        </div>
      </Header>
      <Content
        className="site-layout h-[100vh]"
        style={{
          padding: "0 50px",
        }}
      >
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Banner />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
