import ReactPlayer from 'react-player'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/3wDiqlTNlfQ?si=mm8JSrWDtaYrTx_w" />
      <hr />
      <ReactPlayer url="https://youtu.be/X4AWt_fk0ys?si=HiTWkQI2qb-Ho8nU" />
      <hr />
      <ReactPlayer url="https://youtu.be/Vn3-XKyHRQQ?si=F-IiXG3curZ7Qdh6" />
    </div>
  </div>
)

export default VideoPlayer
