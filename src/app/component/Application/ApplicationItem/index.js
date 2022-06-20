import './style.css'

const ApplicationItem = (props) => {
    return (
      <div className="applicationItem">
        <img alt={props.title} src={props.url} className="applicationItem-image" />
        <div className="applicationItem-description">
            <h5 className="applicationItem-description-title">
                {props.title}
            </h5>
            <div className="applicationItem-description-body">
                {props.desc}
            </div>
        </div>
      </div>
    );
  }
  
  export default ApplicationItem;
  