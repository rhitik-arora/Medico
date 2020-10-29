// import React, { Component } from 'react'
// import {db} from '../firebase.js'
// class SearchForm extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = ({
//              message: '',
//              tabular: ''
//         })
//         this.handleTableChange = this.handleTableChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     // hello() {
//     //     this.setState({
//     //         tabular1: 'Hi'
//     //     })
//     // }

//     handleSearchChange = (event) => {
//         this.setState({
//             message: event.target.value
//         })
//     }

//     handleTableChange() {
//         this.setState({
//             tabular: 'Hi'
//         })
//     }

//     handleSubmit() {

//         const m1 = this.state.message
//         console.log(m1)
//         db.collection("Medicines")
//         .where("Name", "==", m1)
//         .get()
//         .then(querySnapshot => {
//         const data = querySnapshot.docs.map(doc => doc.data().shops);
//         //console.log(data);
//         console.log("from Medicines Collection the shops:")
//         data[0].forEach(function(name){
//             db.collection("Shops")
//         .where("Name", "==", name)
//         .get()
//         .then(querySnapshot => {
//         const data1 = querySnapshot.docs.map(doc => doc.data());
//         console.log("Name: "+name+", Location: "+ data1[0].Location);
//         });
//         })
//         });
        
        
//     }
    

//     render() {
//         return (
//             <div>
//             <form onSubmit={(event)=>{
//                 this.handleSubmit();
                
//                 event.preventDefault()
//             }}>
//                 <div>
//                 <label>Search</label>
//                 <input type="text" value={this.state.message} onChange={this.handleSearchChange}></input>
//                 </div>
//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>
                
//             </form>
//             <div>
//             <h1>{this.state.tabular}</h1>
//             </div>
//             </div>
//         )
//     }
// }

// export default SearchForm
