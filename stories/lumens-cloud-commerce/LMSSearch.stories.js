import React from 'react';
import SearchUI from '../../overrides/app/components/search/SearchUI';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import { IoIosSearch as SearchIcon } from "react-icons/io";

export const _args = {
  isOpen: false,
  setIsOpen: () => {},

  recentSearches: [],
  searchSuggestion: null,
  searchSuggestions: {
    ...data().searchSuggestions,
  },

  onSubmitSearch: () => {},
  onSearchInputChange: () => {},
  closeAndNavigate: () => {},
  shouldOpenPopover: () => {},

  searchQuery: '',
  setSearchQuery: () => {},

  SearchIcon: () => <SearchIcon />,

  parentProps: {
    _placeholder: { color: 'inherit' },
    placeholder: 'Find your Design',
  }
};

export default {
  title: 'Lumens CC/Search',
  component: SearchUI,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      const styles = useMultiStyleConfig('Header');
      const intl = useIntl()
      
      return (
        <div style={{ position: 'relative', }}>
          <Story args={{...args, styles, intl}} />
        </div>
      )
    },
  ],
  args: {
    ..._args,
  }
}

export const Primary = {
  args: {
    ..._args,
  },
};

function data() {
  const searchSuggestions = {
    categorySuggestions: [
      {
        type: 'category',
        id: '62',
        link: '/category/62',
        name: 'Floor <b>Lamp</b>s'
      },
      {
        type: 'category', 
        id: '64',
        link: '/category/64',
        name: 'Reading <b>Lamp</b>s'
      },
      {
        type: 'category',
        id: '227',
        link: '/category/227', 
        name: 'Table <b>Lamp</b>s'
      },
      {
        type: 'category',
        id: '72',
        link: '/category/72',
        name: 'Accent <b>Lamp</b>s'
      },
      {
        type: 'category',
        id: '74',
        link: '/category/74',
        name: 'Console <b>Lamp</b>s'
      }
    ],
    productSuggestions: [
      {
        type: 'product',
        currency: 'USD',
        price: 200,
        productId: 'SEAP527650',
        name: 'Lath Table <b>Lamp</b>',
        link: '/product/SEAP527650'
      },
      {
        type: 'product',
        currency: 'USD', 
        price: 200,
        productId: 'SEAP527644',
        name: 'Coffee Table <b>Lamp</b>',
        link: '/product/SEAP527644'
      },
      {
        type: 'product',
        currency: 'USD',
        price: 460,
        productId: 'SEAP412474',
        name: 'Trina Floor <b>Lamp</b>',
        link: '/product/SEAP412474'
      },
      {
        type: 'product',
        currency: 'USD',
        price: 200,
        productId: 'SEAP527673',
        name: 'Spring Table <b>Lamp</b>',
        link: '/product/SEAP527673'
      },
      {
        type: 'product',
        currency: 'USD',
        price: 200,
        productId: 'SEAP527635',
        name: 'Winter Table <b>Lamp</b>',
        link: '/product/SEAP527635'
      }
    ],
    phraseSuggestions: [
      {
        type: 'phrase',
        name: 'Floor <b>Lamp</b>s',
        link: '/search?q=Floor%20Lamps'
      },
      {
        type: 'phrase',
        name: 'Reading <b>Lamp</b>s',
        link: '/search?q=Reading%20Lamps'
      },
      {
        type: 'phrase',
        name: 'Table <b>Lamp</b>s',
        link: '/search?q=Table%20Lamps'
      },
      {
        type: 'phrase',
        name: 'Accent <b>Lamp</b>s',
        link: '/search?q=Accent%20Lamps'
      },
      {
        type: 'phrase',
        name: 'Console <b>Lamp</b>s',
        link: '/search?q=Console%20Lamps'
      }
    ]
  }

  return {
    searchSuggestions
  }
}
