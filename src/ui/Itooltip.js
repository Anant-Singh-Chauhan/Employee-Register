import info_icon from "./../assets/tooltip.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Itooltip(props) {
  return (
    <OverlayTrigger
      overlay={
        <Tooltip placement="bottom" className="in" id="tooltip-bottom">
          {props.tooltipText}
        </Tooltip>
      }
      placement="bottom"
      delayShow={300}
      delayHide={150}
    >
      {<img src={info_icon} alt="info" className="p-1" />}
    </OverlayTrigger>
    // <div className="tooltip">
    //     <img src={info_icon} alt="info" className="p-1" />
    //     <span className="tooltip-text">{props.tooltipText}</span>

    //     <Tooltip placement="bottom" className="in" id="tooltip-bottom">
    //     {props.tooltipText}
    //   </Tooltip>
    // </div>
  );
}
