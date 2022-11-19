import React from "react";

// Configuración del cómo se ve el botón
const ButtonUI = ({ theme, ...props }) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    />
  );
};

// Funcionalidad del botón
const Link = ({ url, uiComponent, uiProps, children }) => {
  const bridgeProps = {
    ...uiProps,
    onClick: () => window.open(url, "_blanket"),
  };

  return React.createElement(uiComponent, bridgeProps, children);
};

// Usuario Cliente que accede a dicho recurso
const Client = () => {
  const theme = { backgroundColor: "blue", color: "white" };
  return (
    <Link
      url="http://github.com/themithy/react-design-patterns"
      uiComponent={ButtonUI}
      uiProps={{ theme }}
    >
      See other patterns
    </Link>
  );
};

export default Client;
