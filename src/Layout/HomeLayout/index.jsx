import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
// import Loader from 'components/Loader';
import Footer from "./footer";

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <div >
        <Suspense
        // fallback={<Loader show={true} />}
        >
          <main className="main">
          <Outlet />
          </main>
        </Suspense>
      </div>
      <div className="footer-end">
      <Footer />
      </div>
    </div>
  );
}
