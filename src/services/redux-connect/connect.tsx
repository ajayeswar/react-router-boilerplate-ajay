import { connect as $connect, Options } from 'react-redux';

import { RootState } from '../store/store';

export default function connect(
    mapStateToProps?: (state: RootState, ownProps?: any) => any,
    mapDispatchToProps?: any,
    mergeProps?: (stateProps: any, dispatchProps: any, ownProps: any) => any,
    options: Options = {}
) {
    return (target: any) => {
        return $connect(mapStateToProps as any, mapDispatchToProps, mergeProps as any, options)(
            target
        ) as any;
    };
}