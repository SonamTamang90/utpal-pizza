import Header from "./Header";
import Footer from "./Footer";

function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default BaseLayout;
