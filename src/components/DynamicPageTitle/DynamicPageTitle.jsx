import { useEffect } from "react";

const DynamicPageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return;
};

export default DynamicPageTitle;
