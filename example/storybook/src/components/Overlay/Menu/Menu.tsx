import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Button,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  Icon,
  Text,
  styled,
  SettingsIcon,
  AddIcon,
} from '../../../ui-components';
import { createIcon } from '../../../../../../packages/icon/src/createIcon';
import { AsForwarder } from '@gluestack-style/react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

const IconRoot: any = styled(
  AsForwarder,
  {},
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

const PluginIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 16 16',
  path: (
    <Svg fill="none">
      <G clipPath="url(#clip0_5482_51712)">
        <Path
          d="M12.9594 5.23337C12.9267 5.44803 12.9987 5.66537 13.152 5.8187L14.1974 6.86403C14.5107 7.17737 14.668 7.5887 14.668 8.00003C14.668 8.41137 14.5114 8.82203 14.1974 9.13603L13.1234 10.21C13.0512 10.2821 12.9631 10.3363 12.8662 10.3683C12.7693 10.4002 12.6663 10.4091 12.5654 10.394C12.252 10.3474 12.0307 10.074 11.92 9.77737C11.8229 9.51522 11.6615 9.2817 11.4505 9.09828C11.2396 8.91485 10.9859 8.78742 10.7128 8.72769C10.4397 8.66795 10.1559 8.67785 9.88767 8.75646C9.6194 8.83506 9.3752 8.97986 9.17753 9.17753C8.97986 9.3752 8.83506 9.6194 8.75646 9.88767C8.67785 10.1559 8.66795 10.4397 8.72769 10.7128C8.78742 10.9859 8.91485 11.2396 9.09828 11.4505C9.2817 11.6615 9.51522 11.8229 9.77737 11.92C10.0747 12.0307 10.3474 12.2514 10.394 12.5654C10.4091 12.6663 10.4003 12.7693 10.3684 12.8662C10.3364 12.9631 10.2822 13.0512 10.21 13.1234L9.1367 14.1967C8.98763 14.3463 8.81047 14.4649 8.6154 14.5458C8.42034 14.6267 8.21121 14.6682 8.00003 14.668C7.78901 14.6683 7.58001 14.6269 7.38505 14.5461C7.1901 14.4653 7.01303 14.3468 6.86403 14.1974L5.8187 13.152C5.74314 13.0763 5.65089 13.0194 5.54935 12.9858C5.44781 12.9523 5.33982 12.943 5.23403 12.9587C4.90537 13.008 4.67403 13.2947 4.55403 13.604C4.45345 13.8622 4.29009 14.0912 4.07873 14.2704C3.86737 14.4495 3.61468 14.5732 3.34352 14.6301C3.07235 14.687 2.79128 14.6755 2.52571 14.5964C2.26015 14.5174 2.01847 14.3734 1.82255 14.1775C1.62663 13.9816 1.48264 13.7399 1.40362 13.4744C1.3246 13.2088 1.31303 12.9277 1.36996 12.6565C1.42689 12.3854 1.55052 12.1327 1.72968 11.9213C1.90884 11.71 2.13786 11.5466 2.39603 11.446C2.70537 11.326 2.99203 11.0947 3.0407 10.766C3.05651 10.6603 3.04732 10.5523 3.01386 10.4508C2.9804 10.3493 2.9236 10.257 2.84803 10.1814L1.8027 9.13603C1.65326 8.98703 1.53475 8.80996 1.45398 8.61501C1.37321 8.42005 1.33176 8.21106 1.33203 8.00003C1.33203 7.5887 1.48937 7.17737 1.8027 6.86403L2.82003 5.8467C2.98003 5.6867 3.20737 5.61137 3.43137 5.6447C3.7747 5.69603 4.01603 5.9967 4.1467 6.31803C4.2505 6.57253 4.41563 6.79741 4.62738 6.97264C4.83913 7.14787 5.09093 7.26801 5.36035 7.32236C5.62977 7.37672 5.90846 7.3636 6.17158 7.28417C6.43471 7.20474 6.67411 7.06147 6.86846 6.86712C7.06281 6.67277 7.20607 6.43337 7.2855 6.17025C7.36493 5.90712 7.37805 5.62844 7.3237 5.35902C7.26934 5.08959 7.1492 4.83779 6.97397 4.62604C6.79874 4.41429 6.57386 4.24916 6.31937 4.14537C5.99803 4.0147 5.69737 3.77337 5.64603 3.43003C5.6127 3.20603 5.68737 2.97937 5.84803 2.8187L6.8647 1.80203C7.01367 1.6528 7.19066 1.53446 7.38549 1.4538C7.58032 1.37315 7.78917 1.33176 8.00003 1.33203C8.41137 1.33203 8.8227 1.48937 9.13603 1.8027L10.1814 2.84803C10.3347 3.00137 10.552 3.07337 10.766 3.04137C11.0947 2.99203 11.326 2.70537 11.446 2.39603C11.5466 2.13786 11.71 1.90884 11.9213 1.72968C12.1327 1.55052 12.3854 1.42689 12.6565 1.36996C12.9277 1.31303 13.2088 1.3246 13.4744 1.40362C13.7399 1.48264 13.9816 1.62663 14.1775 1.82255C14.3734 2.01847 14.5174 2.26015 14.5964 2.52571C14.6755 2.79128 14.687 3.07235 14.6301 3.34352C14.5732 3.61468 14.4495 3.86737 14.2704 4.07873C14.0912 4.29009 13.8622 4.45345 13.604 4.55403C13.2947 4.67403 13.008 4.90537 12.9594 5.23403V5.23337Z"
          stroke="#8C8C8C"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5482_51712">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  ),
});

const PaintBucketIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 16 16',
  path: (
    <Svg fill="none">
      <G clipPath="url(#clip0_5482_51716)">
        <Path
          d="M12.6666 7.33333L7.33323 2L1.59989 7.73333C1.35559 7.98257 1.21875 8.31766 1.21875 8.66667C1.21875 9.01567 1.35559 9.35076 1.59989 9.6L5.06656 13.0667C5.59989 13.6 6.39989 13.6 6.93323 13.0667L12.6666 7.33333Z"
          stroke="#8C8C8C"
          stroke-width="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.33301 1.33337L6.66634 4.66671"
          stroke="#8C8C8C"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.33301 8.66663H11.333"
          stroke="#8C8C8C"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.6667 13.3333C14.6667 13.6869 14.5262 14.0261 14.2761 14.2761C14.0261 14.5261 13.687 14.6666 13.3333 14.6666C12.9797 14.6666 12.6406 14.5261 12.3905 14.2761C12.1405 14.0261 12 13.6869 12 13.3333C12 12.2666 13.1333 11.7333 13.3333 10.6666C13.5333 11.7333 14.6667 12.2666 14.6667 13.3333Z"
          stroke="#8C8C8C"
          strokeWidth="1.33333"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5482_51716">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  ),
});

export const MenuStory = ({ placement }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Wrapper>
        <Menu
          isOpen={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          placement={placement}
          // eslint-disable-next-line react/no-unstable-nested-components
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps}>
                <Button.Text>Menu</Button.Text>
              </Button>
            );
          }}
        >
          <Menu.Item key="Item1" textValue="Item1">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={GlobeIcon} size="sm" />
              <Text fontSize="$sm" lineHeight="$md">
                Community
              </Text>
            </HStack>
          </Menu.Item>
          <Menu.Item key="Roboto" textValue="Roboto">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={PluginIcon} size="sm" />
              <Text fontSize="$sm" lineHeight="$md">
                Plugins
              </Text>
            </HStack>
          </Menu.Item>
          <Menu.Item key="Poppins" textValue="Poppins">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={PaintBucketIcon} size="sm" />
              <Text fontSize="$sm" lineHeight="$md">
                Theme
              </Text>
            </HStack>
          </Menu.Item>
          <Menu.Item key="Poppins" textValue="Poppins">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={SettingsIcon} size="sm" />
              <Text fontSize="$sm" lineHeight="$md">
                Settings
              </Text>
            </HStack>
          </Menu.Item>
          <Menu.Item key="Poppins" textValue="Poppins">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={AddIcon} size="sm" />
              <Text fontSize="$sm" lineHeight="$md">
                Add account
              </Text>
            </HStack>
          </Menu.Item>
        </Menu>
        <Button>
          <Button.Text>Hello</Button.Text>
        </Button>
      </Wrapper>
    </>
  );
};

export {
  Button,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  Icon,
  Text,
  styled,
  SettingsIcon,
  AddIcon,
  PluginIcon,
  PaintBucketIcon,
};
