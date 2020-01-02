import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const {notification} = props;
   
    return(
        <div className="ShowNot section">
          
            <div className="card">
                <div className="card-content BasiCard">
                    <span className="card-title">
                        Powiadomienia:
                    </span>
                    <ul className="notificationsul">
                       {notification && notification.map(item =>{
    
                           return(
                               <li key={item.id}>
                                <span className="notuser">{item.user}</span>
                                <span className="notcont">{item.content}</span>
                                <span className="notdat">{moment(item.time.toDate()).fromNow()}</span>
                               </li>
                           )
                       })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Notifications