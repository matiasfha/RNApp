import React from 'react';
import TabIcon from '../components/TabIcon';
import MenuButton from '../components/MenuButton';
import LogoutButton from '../components/LogoutButton';
import { osComponent } from '../utils';

const navOptions = (
  { headerMenu = true, title = null, imageName = null, tabLabel = null }
) => {
  const base = {
    headerLeft: osComponent(headerMenu ? <MenuButton /> : null, null),
    headerRight: <LogoutButton />,
    headerStyle: { backgroundColor: '#2E5481' },
    headerTitleStyle: { color: '#fff' },
  };
  const addTab = (image = null) =>
    image
      ? {
          [osComponent('drawerIcon', 'tabBarIcon')]: (
            { tintColor } // eslint-disable-line react/prop-types
          ) => <TabIcon imageName={imageName} tintColor={tintColor} />,
        }
      : null;

  const addTitle = t => t ? { headerTitle: t } : null;
  const addTabLabel = l =>
    l ? { [osComponent('drawerLabel', 'tabBarLabel')]: l } : null;

  return {
    ...base,
    ...addTab(imageName),
    ...addTitle(title),
    ...addTabLabel(tabLabel),
  };
};

export default navOptions;
