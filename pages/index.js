import { Layout  } from 'antd';
import Meta from "./components/layouts/Meta";
import Navbar from "./components/layouts/Navbar";
import Video from "./components/VideoBackground";
import Project from "./components/projects";
import Partner from "./components/partners";
import Footer from "./components/footer";

const { Header, Content } = Layout;

export default function Home() {
  return (
    <div>
      <Meta />
      <Navbar />
      <Video />  
      <Project />
      <Partner />
      <Footer />
    </div>
  );
}
