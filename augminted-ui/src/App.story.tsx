import type { ComponentMeta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { HomePage, HomePageProps } from "./App";

export default {
  title: "App/HomePage",
  component: HomePage,
  args: {
    pageLoaded: action("pageLoaded"),
    connectClicked: action("connectClicked"),
    mintRequestSubmitted: action("mintRequestSubmitted"),
    sectionSelected: action("sectionSelected"),
  },
} as ComponentMeta<typeof HomePage>;

export const Default: Story<HomePageProps> = (args) => <HomePage {...args} />;
