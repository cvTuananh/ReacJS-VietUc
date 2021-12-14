import React,{Component} from 'react';
import User from '../components/User'
class UserPage extends Component{
   
    render() {
        let arrUser =[
            {
                firstName: 'Nam Trump',
                lastName: 'Do'
            },
            {
                firstName: 'Uyen-nhi',
                lastName: 'le'
            },
            {
                firstName: 'Dong-Phuong',
                lastName: 'Tran'
            }
        ]
        
        return (
           <>{
               arrUser.map((item) =>(
                   <User firstName={item.firstName} lastName={item.lastName}/>
               ))
           }</>
        )
    }
}

export default UserPage