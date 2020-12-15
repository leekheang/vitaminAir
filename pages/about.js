import Link from 'next/link'
import { Layout  } from 'antd';
import Meta from "./components/layouts/Meta";
import Navbar from "./components/layouts/Navbar";
import Video from "./components/VideoBackground";
import About from "./components/abouts";
import Partner from "./components/partners";
import Footer from "./components/footer";

const { Header, Content } = Layout;

export default function about() {
  return (
    <div>
      <Meta />
      <Navbar />
      <Video />
      <About />
      <Footer />
    </div>
  );
}
