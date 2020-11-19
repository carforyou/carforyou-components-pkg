import { action } from "@storybook/addon-actions";
import { configure } from "@storybook/react";

import "./stories.css";

configure(require.context("../src", true, /\.stories\.mdx$/), module);
