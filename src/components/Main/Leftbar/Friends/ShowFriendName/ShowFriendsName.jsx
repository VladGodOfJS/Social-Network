import s from "./ShowFriendName.module.scss";

const ShowFriendname = (props) => {
 
  return (
    
    <div className={s.name_item}>
      <img className={s.ava} src={props.url} alt="avatar" />
      <h3 className={s.name}>{props.name}</h3>
    </div>
  );
};

export default ShowFriendname;
