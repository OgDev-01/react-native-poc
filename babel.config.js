module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "i18next-extract",
        {
          locales: ["en"],
          outputPath: "src/i18n/locales/{{locale}}/{{ns}}.json",
          keyAsDefaultValue: ["en"],
          keySeparator: null,
          nsSeparator: null,
        },
      ],
    ],
  };
};
