import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, code, demo }) => {
 
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <div className="proj-tsts">
          <a href={code}>Code</a>
          <br></br>
          <a href={demo}>Demo</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
