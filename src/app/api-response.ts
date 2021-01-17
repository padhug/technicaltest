import { Stash } from './stash';

export interface ApiResponse {
    next_change_id: string,
    stashes: Stash[];
}
