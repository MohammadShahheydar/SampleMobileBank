import React, {ReactNode} from "react";

/**
 * in reactJs every item in list should have specific id
 * this method is useful when we want to force react, to implement these keys
 * @param list
 */
export const generateListWithKey = (list: ReactNode | ReactNode[]) => {
    return React.Children.toArray(list)
}