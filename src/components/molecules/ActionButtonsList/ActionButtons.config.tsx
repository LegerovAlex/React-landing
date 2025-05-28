import { CameraIcon, ExtensionIcon, NotificationIcon } from "@/static";

export const actionButtonsConfig = [
  {
    key: "camera",
    icon: <CameraIcon />,
    onClick: () => console.log("Camera clicked"),
  },
  {
    key: "extension",
    icon: <ExtensionIcon />,
    onClick: () => console.log("Extension clicked"),
  },
  {
    key: "notifications",
    icon: <NotificationIcon />,
    notificationCount: 3,
    onClick: () => console.log("Notifications clicked"),
  },
];
