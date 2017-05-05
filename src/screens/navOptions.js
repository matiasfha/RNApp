import React from "react";
import TabIcon from "../components/TabIcon";

const navOptions = ({ title = null, imageName = null, tabLabel = null }) => {
  const base = {
    headerLeft: null,
    headerRight: null,
    headerStyle: { backgroundColor: "#2E5481" },
    headerTitleStyle: { color: "#fff" }
  };
  const addTab = (image = null) =>
    image
      ? {
          tabBarIcon: (
            { tintColor } // eslint-disable-line react/prop-types
          ) => <TabIcon imageName={imageName} tintColor={tintColor} />
        }
      : null;

  const addTitle = t => t ? { headerTitle: t } : null;
  const addTabLabel = l => l ? { tabBarLabel: l } : null;

  return {
    ...base,
    ...addTab(imageName),
    ...addTitle(title),
    ...addTabLabel(tabLabel)
  };
};

export default navOptions;
