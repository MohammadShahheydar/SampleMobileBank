import {MutationFunction} from "@tanstack/react-query";
export class MutateService<RESPONSE, REQUEST> {
    mutationFn: MutationFunction<RESPONSE, REQUEST>
    onSuccess?: () => void
    constructor(query: MutationFunction<RESPONSE, REQUEST> , onSuccess?: () => void) {
        this.mutationFn = query;
        this.onSuccess = onSuccess
    }
}