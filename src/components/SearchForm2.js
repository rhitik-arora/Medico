import React, { Component } from 'react'
import {db} from '../firebase.js'

class SearchForm2 extends Component {


    getData(m1) {
         let data1=[],c=0;
        m1.forEach(function(name){
            db.collection("Shops")
        .where("Name", "==", name)
        .get()
        .then(querySnapshot => {
        data1[c] = querySnapshot.docs.map(doc => doc.data().Location);
        c=c+1;
        });
        })

        console.log(data1)

    }

    // render() {
    //     return (
    //         <div>
    //             {this.props.name}
    //         </div>
    //     )
    // }

    render() {
        // const isLoggedIn = this.state.isLoggedIn;
        
    
        return (
          <div>
            {this.props.Location}
          </div>
        );
      }
    }

export default SearchForm2
