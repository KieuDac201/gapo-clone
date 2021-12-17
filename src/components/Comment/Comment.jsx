import styled from "styled-components"
import { timeSince } from "../../utils"

const Comment = ({ img, name, comment, time }) => {
  return (
    <Cmt>
      <img src={img} alt="" />
      <div className="right">
        <div className="comment">
          <h5>{name}</h5>
          <p>{comment}</p>
        </div>
        <div className="time">
          {timeSince(time)}
        </div>
      </div>

    </Cmt>
  )
}

export default Comment

const Cmt = styled.div`
  display: flex;
  
  img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .right{
    
    margin-left: 10px;
    .time{
      font-size: 11px;
      margin-top: 2px;
      text-align: right;
    }
  }
  .comment{
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-radius: 12px;
    font-size: 14px;
    h5{
    }
  }

`
