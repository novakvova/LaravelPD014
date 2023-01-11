import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsCreators from '../store/action-creators';

export const useActions = () => {
    const disptach = useDispatch();
    return bindActionCreators(ActionsCreators, disptach);
}