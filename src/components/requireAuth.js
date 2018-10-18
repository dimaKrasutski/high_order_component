import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component{

    //Our component just got rendered
componentDidMount(){
    this.shouldNavigateAway()
  }
  //Our component just got updated (когда мы получаем новые PROPS)
  componentDidUpdate(){
  this.shouldNavigateAway();
  }
  shouldNavigateAway(){
      if(!this.props.auth){
          console.log('Go away')
          this.props.history.push('/')  //эта фигня перенаправляет нас на страницу входа, если наш auth - false
      }  
  }
  
      render() {
        return <ChildComponent {...this.props}/>
      }
  }

  function mapStateToProps(state){
    return  {auth: state.auth}
}

return connect(mapStateToProps)(ComposedComponent)
}


