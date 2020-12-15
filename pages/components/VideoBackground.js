import { Layout , Button} from 'antd';
export function VideoBackground() {
  
    return (
      <>
        <div className="video-style">
        
            <video   autoPlay="autoplay" loop="loop" muted  > 
                    <source src="/video/index.mp4" type="video/mp4" />
                    Your Brower dosen't support the video tag.
             
            
                
            </video>
            <div className="dark-opacity">
            </div> 
            <div className="title-cover  ">
                <h1>In search of</h1>
                <h1 className="h1color">The Next Small Things</h1>
                <p>Protect, preserve, and restore our rain forests for generations ahead</p>
                <Button className="btn-discover" shape="round">Discover</Button>
            </div>
        </div>
      </>
    );
  }
  
  export default VideoBackground;
  