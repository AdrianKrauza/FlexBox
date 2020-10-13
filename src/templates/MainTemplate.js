import React from "react";
import theme from "theme";
import GlobalStyle from "theme/globalStyle";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTemplate;
