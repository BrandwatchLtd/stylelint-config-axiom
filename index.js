module.exports = {
  "plugins": [
    "stylelint-order",
  ],
  "rules": {
    "at-rule-name-case": "lower",
      "at-rule-name-space-after": "always",
      "at-rule-no-vendor-prefix": true,
      "at-rule-semicolon-newline-after": "always",
      "block-closing-brace-empty-line-before": "never",
      "block-closing-brace-newline-after": "always",
      "block-closing-brace-newline-before": "always-multi-line",
      "block-closing-brace-space-before": "always-single-line",
      "block-no-empty": true,
      "block-opening-brace-newline-after": "always-multi-line",
      "block-opening-brace-space-after": "always-single-line",
      "color-hex-case": "upper",
      "color-hex-length": "long",
      "color-named": "never",
      "color-no-hex": true,
      "color-no-invalid-hex": true,
      "comment-empty-line-before": ["always", {
        "except": [ "first-nested" ],
        "ignore": [ "after-comment", "stylelint-commands" ]
      }],
      "comment-no-empty": true,
      "comment-whitespace-inside": "always",
      "declaration-bang-space-after": "never",
      "declaration-bang-space-before": "always",
      "declaration-block-no-duplicate-properties": [true, {
        "ignore": "consecutive-duplicates-with-different-values"
      }],
      "declaration-block-no-shorthand-property-overrides": true,
      "declaration-block-semicolon-newline-after": "always-multi-line",
      "declaration-block-semicolon-space-before": "never",
      "declaration-block-single-line-max-declarations": 2,
      "declaration-block-trailing-semicolon": "always",
      "declaration-colon-newline-after": "always-multi-line",
      "declaration-colon-space-after": "always-single-line",
      "declaration-colon-space-before": "never",
      "declaration-empty-line-before": "never",
      "declaration-no-important": true,
      "font-weight-notation": "numeric",
      "function-calc-no-unspaced-operator": true,
      "function-comma-space-after": "always-single-line",
      "function-comma-space-before": "never",
      "function-linear-gradient-no-nonstandard-direction": true,
      "function-name-case": "lower",
      "function-parentheses-space-inside": "never-single-line",
      "function-url-data-uris": "always",
      "function-url-quotes": "always",
      "function-whitespace-after": "always",
      "indentation": 2,
      "length-zero-no-unit": true,
      "max-empty-lines": 1,
      "max-line-length": 110,
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-case": "lower",
      "media-feature-name-no-unknown": true,
      "media-feature-name-no-vendor-prefix": true,
      "media-feature-parentheses-space-inside": "never",
      "media-feature-range-operator-space-after": "always",
      "media-feature-range-operator-space-before": "always",
      "media-query-list-comma-space-after": "always",
      "media-query-list-comma-space-before": "never",
      "no-descending-specificity": true,
      "no-duplicate-selectors": true,
      "no-empty-source": true,
      "no-eol-whitespace": true,
      "no-extra-semicolons": true,
      "no-invalid-double-slash-comments": true,
      "no-missing-end-of-source-newline": true,
      "number-leading-zero": "always",
      "number-no-trailing-zeros": true,
      "order/properties-order": [[
        "content",

        "display",
        "position",
        "top",
        "right",
        "bottom",
        "left",

        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "order",

        "width",
        "min-width",
        "max-width",

        "height",
        "min-height",
        "max-height",

        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",

        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",

        "float",
        "clear",

        "columns",
        "column-gap",
        "column-fill",
        "column-rule",
        "column-span",
        "column-count",
        "column-width",

        "transform",
        "transform-box",
        "transform-origin",
        "transform-style",

        "opacity",

        "outline",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",

        "border",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "border-width",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
        "border-collapse",
        "border-spacing",

        "border-style",
        "border-top-style",
        "border-right-style",
        "border-bottom-style",
        "border-left-style",

        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-left-radius",
        "border-bottom-right-radius",

        "border-color",
        "border-top-color",
        "border-right-color",
        "border-bottom-color",
        "border-left-color",

        "box-shadow",

        "background",
        "background-attachment",
        "background-clip",
        "background-color",
        "background-image",
        "background-repeat",
        "background-position",
        "background-size",

        "color",
        "fill",
        "fill-opacity",
        "stroke",

        "font",
        "font-family",
        "font-size",
        "font-smoothing",
        "font-style",
        "font-variant",
        "font-variant-ligatures",
        "font-weight",

        "letter-spacing",
        "list-style",

        "text-align",
        "text-decoration",
        "text-indent",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "text-wrap",

        "line-height",
        "white-space",
        "word-spacing",
        "cursor",

        "visibility",
        "vertical-align",
        "overflow",
        "z-index",
        "resize",

        "transition",
        "transition-property",
        "transition-delay",
        "transition-duration",
        "transition-timing-function",

        "animation",
        "animation-name",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-play-state",
        "animation-timing-function",
      ], { unspecified: "bottom" }],
      "property-case": "lower",
      "property-no-unknown": true,
      "property-no-vendor-prefix": true,
      "rule-empty-line-before": ["always-multi-line", {
        "except": ["first-nested"],
        "ignore": ["after-comment", "inside-block"]
      }],
      "selector-attribute-brackets-space-inside": "never",
      "selector-attribute-operator-space-after": "never",
      "selector-attribute-operator-space-before": "never",
      "selector-attribute-quotes": "always",
      "selector-combinator-space-after": "always",
      "selector-combinator-space-before": "always",
      "selector-descendant-combinator-no-non-space": true,
      "selector-list-comma-newline-after": "always",
      "selector-list-comma-space-before": "never",
      "selector-max-empty-lines": 0,
      "selector-no-id": true,
      "selector-no-type": [true, {
        "ignore": ["compounded"],
        "ignoreTypes": ["html", "body"],
      }],
      "selector-no-universal": true,
      "selector-no-vendor-prefix": true,
      "selector-pseudo-class-case": "lower",
      "selector-pseudo-class-no-unknown": true,
      "selector-pseudo-class-parentheses-space-inside": "never",
      "selector-pseudo-element-case": "lower",
      "selector-pseudo-element-colon-notation": "double",
      "selector-pseudo-element-no-unknown": true,
      "selector-type-case": "lower",
      "selector-type-no-unknown": true,
      "shorthand-property-no-redundant-values": true,
      "string-no-newline": true,
      "string-quotes": "single",
      "unit-blacklist": ["em", "px"],
      "unit-case": "lower",
      "unit-no-unknown": true,
      "value-keyword-case": "lower",
      "value-list-comma-space-after": "always-single-line",
      "value-list-comma-space-before": "never",
      "value-list-max-empty-lines": 0,
      "value-no-vendor-prefix": true
  }
};
