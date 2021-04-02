import s from './ShowMessage.module.scss';

const ShowMessage=(props)=>{
    return(
        <div className={s.item}>{props.message}</div>
    );
}


export default ShowMessage;