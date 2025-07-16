import { ConfigProvider, Flex, theme as ThemAntd } from "antd";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "./App.less";
import ROUTER from "./constants/router";
import ROUTER_PATH from "./constants/router-path";
import ProtectedLayout from "./layout/ProtectedLayout";
import PublicLayout from "./layout/PublicLayout";
import Login from "./pages/_Auth/Login";
import Register from "./pages/_Auth/Register";

function App() {
  const theme = "light";
  const themeANTD = {
    lightTheme: {
      token: {
        colorBgContainer: "var(--background-primary)",
        fontFamily: "Tiktok Sans, sans-serif",
        colorPrimary: "var(--button-on-bg)",
      },
      components: {
        Button: {
          colorPrimaryHover: "var(--button-on-bg)",
          // defaultHoverBg: "var(--button-off-bg)",
          colorPrimaryActive: "var(--button-on-bg)",
        },
        Input: {
          activeBorderColor: 'var(--button-on-bg)',
          hoverBorderColor: 'var(--button-on-bg)',
        },
        DatePicker: {
          hoverBorderColor: 'var(--button-on-bg)',
          activeBorderColor: 'var(--button-on-bg)',
        }
      },
    },
    darkTheme: {
      algorithm: ThemAntd.darkAlgorithm,
      token: {
        colorBgContainer: "var(--background-secondary)",
        fontFamily: "Tiktok Sans, sans-serif",
        components: {
          Button: {
            colorPrimaryHover: "var(--button-on-bg)",
            // defaultHoverBg: "var(--button-off-bg)",
            // colorPrimaryActive: "var(--button-on-bg)",
          },
        },
      },
    },
  };
  return (
    <ConfigProvider
      theme={theme === "light" ? themeANTD.lightTheme : themeANTD.darkTheme}
    >
      <div className="hidden-overflow">
        <Flex vertical className="gap-16 h-screen">
          <SimpleBar className="full-max-height full-max-width">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<PublicLayout />}>
                  <Route path={ROUTER_PATH.LOGIN} element={<Login />} />
                  <Route path={ROUTER_PATH.REGISTER} element={<Register />} />
                </Route>
                <Route element={<ProtectedLayout />}>
                  {ROUTER.map(({ path, element, listChildren }) => {
                    return (
                        <Route path={path} element={element} key={path}>
                          {listChildren &&
                            listChildren.map((child) => (
                              <Route
                                path={child.path}
                                element={child.element}
                                key={child.path}
                              />
                            ))}
                        </Route>
                      );
                  })}
                </Route>
              </Routes>
            </Suspense>
          </SimpleBar>
        </Flex>
      </div>
    </ConfigProvider>
  );
}

export default App;
