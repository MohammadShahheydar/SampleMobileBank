import React, {ReactNode} from "react";
import {Stack, StackProps} from "@mui/material";
import {generateListWithKey} from "../../utils/generateListWithKey";
import Grid2 from "@mui/material/Unstable_Grid2";
import {StyledStack} from "../style/StyledStack";

export const SkeletonLoading = (props: {
    loading: boolean
    numberOfSkeleton: number
    arrangement?: "STACK" | "GRID"
    gridItemPerRow?: number
    gridSpacing?: number
    skeletonItem: ReactNode
    children: ReactNode
} & StackProps) => {
    const {loading, skeletonItem, numberOfSkeleton, children, arrangement, gridItemPerRow, gridSpacing, ...rest} = props
    return (
        <>
            {
                loading ?
                    (
                        <>
                            {
                                (arrangement ?? "STACK") == "STACK" ?
                                    (
                                        <Stack {...rest}>
                                            {generateListWithKey([...Array(numberOfSkeleton).keys()].map((value, index) => {
                                                return (
                                                    <>{skeletonItem}</>
                                                )
                                            }))}
                                        </Stack>
                                    ):
                                    (
                                        <Grid2 rowGap={rest.gap} width={"100%"} container spacing={gridSpacing ?? 1}
                                               justifyContent={"center"} alignItems={"center"}>
                                            {generateListWithKey([...Array(numberOfSkeleton).keys()].map((value, index) => {
                                                return (
                                                    <Grid2 xs={12 / (gridItemPerRow ?? 1)}>
                                                        <StyledStack justifyContent={"center"} alignItems={"center"}>
                                                            {skeletonItem}
                                                        </StyledStack>
                                                    </Grid2>
                                                )
                                            }))}
                                        </Grid2>
                                    )
                            }
                        </>
                    ):
                        children
            }
        </>
    )
}