import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Title: This code is used for loading a page from the top
 * * I was facing a problem and that was when I click on a link the page was not loading from the top. Then I found this solution on stack overflow
 *
 */

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
