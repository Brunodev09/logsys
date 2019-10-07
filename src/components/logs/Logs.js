import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../pages/Preloader';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
    }, []);

    if (loading || logs === null) {
        return <Preloader />
    }

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4 className="center">Logs</h4></li>
                {!loading && logs.length === 0 ? <p className='center'>No logs found!</p> : (logs.map(log => <LogItem log={log} key={log.id} />))}
            </ul>
        </div>
    )
}

// This will bring the logReducer state (state.log) to a prop named 'log' to this component.
const mapStateToProps = state => ({
    log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
