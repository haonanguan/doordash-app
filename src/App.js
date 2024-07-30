import { Layout, Typography } from "antd";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import FoodList from "./components/FoodList";
import MyCart from "./components/MyCart";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
    const [authed, setAuthed] = useState(false);

    return (
        <Layout style={{ height: "100vh" }}>
            <Header>
                <div
                    className="header"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Title
                        level={2}
                        style={{ color: "white", lineHeight: "inherit", marginBottom: 0 }}
                    >
                        SwiftBite
                    </Title>
                    {/* <div>{authed ? <MyCart /> : <SignupForm />}</div> */}
                    <div>
                        {authed ? <MyCart /> : <LoginForm onSuccess={() => setAuthed(true)} />}
                    </div>
                </div>
            </Header>
            <Content
                style={{
                    padding: "50px",
                    maxHeight: "calc(100% - 64px)",
                    overflowY: "auto",
                }}
            >
                <FoodList authed={authed} />
                {/* {authed ? <FoodList /> : <LoginForm onSuccess={() => setAuthed(true)} />} */}
            </Content>
        </Layout>
    );
}

export default App;
