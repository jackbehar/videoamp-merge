import React from "react";
import { IconButton as PreampIconButton, IconButtonProps } from '@preamp/core';
import { AlertTriangle, Audiences, Buy, Calendar, Check, CheckCircle, ChevronDown, ChevronUp, CloudUpload, Dashboard } from '@preamp/signal';

// const myComponentsList = [
//   AlertTriangle,
//   AlertTriangle,
//   Check
// ];
// const myComponentsListByName = {
//   AlertTriangle: AlertTriangle,
//   Audiences: Audiences,
//   Check: Check
// };

export interface props extends IconButtonProps {
  size?: 'sm' | 'lg',
  icon: "AlertTriangle" | "Audiences" | "Buy" | "Calendar" | "Check" | "CheckCircle" | "ChevronDown" | "ChevronUp" | "CloudUpload" | "Dashboard",
}

export default function IconButton(props: props) {
  let SelectedIcon;
  switch (props.icon) {
    case "AlertTriangle":
      SelectedIcon = AlertTriangle
      break;
    case "Audiences":
      SelectedIcon = Audiences
      break;

    case "Buy":
      SelectedIcon = Buy
      break;

    case "Calendar":
      SelectedIcon = Calendar
      break;

    case "Check":
      SelectedIcon = Check
      break;

    case "CheckCircle":
      SelectedIcon = CheckCircle
      break;

    case "ChevronDown":
      SelectedIcon = ChevronDown
      break;

    case "ChevronUp":
      SelectedIcon = ChevronUp
      break;

    case "CloudUpload":
      SelectedIcon = CloudUpload
      break;

    case "Dashboard":
      SelectedIcon = Dashboard
      break;

    default:
      SelectedIcon = null
  }

  return (
    <PreampIconButton
      {...props}
      icon={SelectedIcon}
    />
  );
}
