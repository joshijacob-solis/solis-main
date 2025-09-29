import { Outlet, useLocation } from "react-router-dom";
import { ScrollTopButton } from "../components/Buttons/ScrollTopButton";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";
import "./mainPageLayout.css";
import MainModal from "../components/Modal/modal";
import sale1 from "../assets/images/sale1.jpg";
import sale2 from "../assets/images/sale2.jpg";
import { MultiCarousel } from "../components/MultiCarousel/multiCarousel";

export const MainPageLayout = () => {

  const path = useLocation().pathname;
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <ScrollTopButton />
      {/* {(!path.includes("/contacts"))&&<MainModal>
        <MultiCarousel
          isModal={true}
          data={[
            <img
              src={sale1}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="sale1"
            />,
            <img
              src={sale2}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="sale2"
            />,
          ]}
        />
      </MainModal>} */}
      <Footer />
    </div>
  );
};
