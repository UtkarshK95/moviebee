import nextConfig from "eslint-config-next";

export default [
  ...nextConfig,
  {
    rules: {
      // Standard async data-fetching and hydration-guard patterns trigger this rule.
      // All flagged usages in this project are intentional and correct.
      "react-hooks/set-state-in-effect": "off",
    },
  },
];
