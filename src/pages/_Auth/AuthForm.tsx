import { Button, Form, Input } from "antd";
import ggLogo from "../../assets/images/Google__G__logo.svg.webp";
import { useNavigate } from "react-router-dom";

type AuthType = "login" | "register";
type FieldType = {
  username?: string;
  email: string;
  password: string;
};
const AuthForm = ({ type }: { type: AuthType }) => {
  const navigate = useNavigate();
  return (
    <Form
      name="basic"
      layout="vertical"
      style={{ width: '100%' }}
      initialValues={{ remember: true }}
      onFinish={() => {}}
      onFinishFailed={() => {}}
      autoComplete="off"
      className="auth-form-container"
    >
      {type === 'register' && (
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          className="body-m-emphasized"
        >
          <Input />
        </Form.Item>
      )}
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
        className="body-m-emphasized"
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        className="body-m-emphasized"
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label={null}>
        <Button onClick={() => navigate('/dashboard')} type="primary" htmlType="submit" className="w-full btn-bg-on border-none body-m-emphasized">
          {type === "login" ? "Login" : "Submit"}
        </Button>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="default" htmlType="submit" className="w-full border-none body-m-emphasized">
          <img src={ggLogo} alt="Google Logo" className="w-24 h-24" />
          Login with Google
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
