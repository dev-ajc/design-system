import React from "react";
import LMSProductListingPage from "./LMSProductListingPage";
import "./LMSProductListingPage.scss";

export default {
  title: "Lumens/ProductListingPage",
  component: LMSProductListingPage,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <LMSProductListingPage {...args} />;

export const Default = Template.bind({});
Default.args = {};