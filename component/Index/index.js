/**
 * Created by xiawei05 on 17/3/30.
 */
import React from 'react'
import style from './index.less'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getName } from '../../actions/indexAction'


class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    changeName() {
        this.props.dispatch(getName("xiawei"))
    }
    render() {
        console.log(this.props.name)
        return (<div className={ style.index }>
            <span>
                haha
            </span>
            <Link to="/other">Go</Link>
            <button onClick={ this.changeName.bind(this) }>换名字</button>
        </div>)
    }
}

export default connect(changeData)(Index);

function changeData(state) {
    return {
        name: state.reducers.name
    }
}