import { fn } from '@storybook/test';

import React from 'react';
import { AboutLumensUI } from '../../overrides/app/components/about-lumens';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import { CurrencyProvider, MultiSiteProvider } from '@salesforce/retail-react-app/app/contexts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const data = {
  _v: "22.8",
  _type: "content",
  id: "lu-footer-about-links",
  name: "About us links in footer",
  c_Robots: true,
  c_body: "<h3>About Lumens</h3>\r\n<a href=\"https://poc.lumens.com/about-us.html\" title=\"About Lumens\">About Us</a>\r\n<a href=\"/lumens-lux-rewards.html\" title=\"Lumens Lux Rewards\">Lumens Lux Rewards</a>\r\n<!--<a href=\"https://www.ydesigngroup.com/\">Partner with Us</a>-->\r\n<a href=\"https://poc.lumens.com/affiliates.html\" title=\"Become an Affiliate\">Become an Affiliate</a>\r\n<a href=\"https://www.lumens.com/the-edit/the-press/\" title=\"Press Mentions\">As Seen In</a>\r\n<a href=\"https://poc.lumens.com/press-releases.html\" title=\"Press Releases\">Press Releases</a>\r\n<a href=\"/careers.html\" title=\"Lumens Careers\">Careers</a>\r\n<!--<a class=\"footer-feedback\" style=\"cursor: pointer;\" onmouseover = \"this.style.textDecoration = 'underline'\"\r\n onmouseout = \"this.style.textDecoration = 'none'\">Feedback</a>\r\n<a id=\"getFeedbackLink\" onclick=\"getFeedbackFunction()\" href=\"#\">Feedback</a>--!>",
}

export default {
  title: 'Lumens CC/AboutLumens',
  component: AboutLumensUI,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      const styles = useMultiStyleConfig('Header');
      const intl = useIntl()
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
      
      queryClient.setQueryData([
        'contentAsset', 'Lumens', 'lu-footer-about-links'
      ], {
        data: data,
      })

      return (
        <QueryClientProvider client={queryClient}>
          <MultiSiteProvider>
            <Story args={{...args, styles, intl}} />
          </MultiSiteProvider>
        </QueryClientProvider>
      )
    },
  ],
  args: {
  },
}

export const Primary = {
  args: {
    c_body: data.c_body,
  },
};

