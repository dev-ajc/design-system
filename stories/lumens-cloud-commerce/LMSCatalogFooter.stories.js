import { fn } from '@storybook/test';

import React from 'react';
import { CatalogFooterUI } from '../../overrides/app/components/catalog-footer';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import { MultiSiteProvider } from '@salesforce/retail-react-app/app/contexts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


export default {
  title: 'Lumens CC/CatalogFooter',
  component: CatalogFooterUI,
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
      });

      queryClient.setQueryData([
        'contentAsset',
        'Lumens',
        'lumens-consumer-catalog-footer'
      ], {
        data: data,
      });

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
    c_body: data()
      .c_body
      .replace('.urgency', '.x--urgency')
      .replace(/data-src/g, 'src'),
  },
};

function data() {
  return {
    _v: '22.8',
    _type: 'content',
    id: 'lumens-consumer-catalog-footer',
    name: 'Lumens consumer catalog (footer)',
    c_Robots: true,
    c_body: "<style>.urgency{display: none;} #footer-wrapper .footer-links>div>div.catalog img.auto-height{height: auto}</style>\r\n\r\n<a href=\"https://poc.lumens.com/catalog.html\" title=\"Shop Our Catalog\">\r\n        <h3>Shop Our Catalog</h3>\r\n        <img data-src=\"https://img.lumens.com/9JWOMRAM/at/j39gp9xxt4x4ncnq3rs3fn8/Nov_Gift_Guide_Brochure_2023-final-1.jpg?auto=webp&format=png&width=300\" alt=\"Lumens Catalog\" class=\"lazyload urgency auto-height\" data-date-range=\"2023-11-04/2023-12-31\" />\r\n        <img data-src=\"https://img.lumens.com/9JWOMRAM/at/8rwx25f7vtj8c48jc6jj4r/Consumer_Jan-2024_6x8_digital-version_final_lowres-1.jpg?auto=webp&format=pjpg?auto=webp&format=png&width=300\" alt=\"Lumens Catalog\" class=\"lazyload urgency\" data-date-range=\"2024-01-01/2024-03-01\" />\r\n</a>\r\n<script>\r\n\r\nfunction parseDateString(dateString) {\r\n  const year = dateString.slice(0, 4);\r\n  const month = parseInt(dateString.slice(4, 6)) - 1; // Month is zero-indexed\r\n  const day = dateString.slice(6, 8);\r\n  const hour = dateString.slice(8, 10);\r\n  const minute = dateString.slice(10, 12);\r\n\r\n  return new Date(year, month, day, hour, minute);\r\n}\r\n\r\n\r\nfunction setUrgency(selector_) {\r\n  var elements = document.querySelectorAll(selector_);\r\n\r\n  for (var i = 0; i < elements.length; i++) {\r\n    var par_ = new URLSearchParams(window.location.search);\r\n    var prvDate_ = null;\r\n    if (par_.has(\"__siteDate\")) {\r\n      prvDate_ = par_.get(\"__siteDate\");\r\n    }\r\n    // Get the element's data-date-range attribute value\r\n    var dateRange = elements[i].getAttribute(\"data-date-range\");\r\n\r\n    // Split the date range into start and end dates\r\n    var dates = dateRange.split(\"/\");\r\n    var startDate = new Date(dates[0]);\r\n    var endDate = new Date(dates[1]);\r\n\r\n    // Check if the current date is between the start and end dates\r\n    var currentDate = new Date();\r\n    if (currentDate >= startDate && currentDate <= endDate && !prvDate_) {\r\n      // Show the element\r\n      elements[i].style.display = \"block\";\r\n    }\r\n    \r\n    if (window.location.href.indexOf(\"staging\") > -1 && prvDate_) {\r\n      if (\r\n        parseDateString(prvDate_) >= startDate &&\r\n        parseDateString(prvDate_) <= endDate\r\n      ) {\r\n        elements[i].style.display = \"block\";\r\n      }else{\r\n        elements[i].style.display = \"none\";\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nsetUrgency(\".urgency\");\r\n</script>"
  };
}

