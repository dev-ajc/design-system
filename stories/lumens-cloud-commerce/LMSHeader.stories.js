import { fn } from '@storybook/test';

import React from 'react';
import HeaderUI from '../../overrides/app/components/header/HeaderUI';
import { useMultiStyleConfig, IconButton, Image, Icon } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

import AccountIcon from '@salesforce/retail-react-app/app/assets/svg/account.svg';
import BasketIcon from '@salesforce/retail-react-app/app/assets/svg/basket.svg';
import HamburgerIcon from '@salesforce/retail-react-app/app/assets/svg/hamburger.svg';
import ChevronDownIcon from '@salesforce/retail-react-app/app/assets/svg/chevron-down.svg';
import SignoutIcon from '@salesforce/retail-react-app/app/assets/svg/signout.svg';

import Logo from "../../overrides/app/static/img/LU-Header-Sprite-Vector.svg";
import TradeUI from '../../overrides/app/components/lumens-trade/TradeUI';
import SearchUI from '../../overrides/app/components/search/SearchUI';
import { _args as searchArgs } from './LMSSearch.stories';

const phoneRegion = {
  "data": {},
  "description": "Menu for categories, additional components",
  "id": "headercomponents",
  "name": "Header Components",
  "regions": [
      {
          "components": [
              {
                  "data": {},
                  "id": "832d31a45637af30554b027c72",
                  "regions": [
                      {
                          "components": [
                              {
                                  "data": {
                                      "richtext": "<p>Guest:Test Guest</p>"
                                  },
                                  "id": "a0cde5f0bfa2a78c53377f30f1",
                                  "typeId": "assets.texttile"
                              }
                          ],
                          "id": "column1"
                      }
                  ],
                  "typeId": "layouts.1column"
              }
          ],
          "id": "main"
      }
  ],
  "typeId": "homepagelayout"
};

const navLinks = [
  {
    "name": "profile",
    "path": "",
    "icon": {
      "propTypes": {}
    }
  },
  {
      "name": "wishlist",
      "path": "/wishlist",
      "icon": {
        "propTypes": {}
      }
  },
  {
      "name": "orders",
      "path": "/orders",
      "icon": {
        "propTypes": {}
      }
  },
  {
      "name": "addresses",
      "path": "/addresses",
      "icon": {
        "propTypes": {}
      }
  }
];

import '../../overrides/app/static/style-sheets/styleSheet.scss';

const iconWH = {
  width: '24px',
  height: '24px',
}

const LumensLogo = () => {
  const styles = useMultiStyleConfig('Header');
  const intl = useIntl()

  return (
    <IconButton
      aria-label={intl.formatMessage({
        id: 'header.button.assistive_msg.logo',
        defaultMessage: 'Logo'
      })}
      {...styles.icons}
      variant="unstyled"
      onClick={() => {}}
      className="lumens-logo"
    >
      <Image src={Logo}
        alt={"logo"}
        aria-label={intl.formatMessage({
          id: 'header.button.assistive_msg.logo',
          defaultMessage: 'Logo'
        })}
        className="lumens-logo testLogo"
      />
    </IconButton>
  );
};


export default {
  title: 'Lumens CC/Header',
  component: HeaderUI,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      const styles = useMultiStyleConfig('Header');
      const intl = useIntl()
      
      return (
          <Story args={{...args, styles, intl}} />
      )
    },
  ],
  args: {
    onMenuClick: fn(),
    onLogoClick: fn(),

    AccountIcon: () => <Image src={AccountIcon} alt="logo" {...iconWH} />,
    BasketIcon: () => <Image src={BasketIcon} alt="BasketIcon" {...iconWH} />,
    HamburgerIcon: () => <Image src={HamburgerIcon} alt="HamburgerIcon" {...iconWH} />,
    ChevronDownIcon: () => <Image src={ChevronDownIcon} alt="ChevronDownIcon" {...iconWH} />,
    SignoutIcon: () => <Image src={SignoutIcon} alt="SignoutIcon" {...iconWH} />,
    LumensLogo: () => <LumensLogo />,

    Search: () => <SearchUI {...searchArgs} />,
    Trade: () => <TradeUI components="Test: Test Guest" />,
  },
}


export const Primary = {
  args: {
    showLoading: false,
    isRegistered: false,
    isDesktop: true,
    onOpen: fn(),
    onClose: fn(),
    onMyAccountClick: fn(),
    onMyCartClick: fn(),
    phoneRegion: phoneRegion,
    navLinks: navLinks,
  },
};

/*
<HeaderUI
    styles={styles}
  intl={intl}
    onMenuClick={onMenuClick}
    onLogoClick={onLogoClick}
    phoneRegion={phoneRegion}
    menuRegion={menuRegion}
    isRegistered={isRegistered}
    isDesktop={isDesktop}
    onOpen={onOpen}
    onClose={onClose}
    onMyAccountClick={onMyAccountClick}
    onMyCartClick={onMyCartClick}
    showLoading={showLoading}
    basket={basket}
    totalItems={totalItems}
/>
*/