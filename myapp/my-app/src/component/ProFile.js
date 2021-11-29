import ava from '../Asset/ava.jpg'
function ProFile (){
   return( <div>
      <img src={ava} className="AppImg"></img>
        <div className="AppInfo">
         <table>
         <tr>
                <th>Name</th>
                <th>Sex</th>
                <th>Phone</th>
                <th>Email</th>
                <th>FaceBook</th>
         </tr>
         <tr>
               <td>Cu Vi Tuan Anh</td>
               <td>Nam</td>
               <td>0568553364</td>
               <td>LeVanTeo@gmail.com</td>
               <td>Cu Vi Tuan Anh</td>
         </tr>
         </table>  
        </div>
   </div>
   )}
export default ProFile