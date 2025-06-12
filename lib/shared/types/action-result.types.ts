export enum ActionResultStatus {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    IDLE = 'IDLE',
}

export type ActionResult<DataType> = {
    data?: DataType;
    error?: string;
    status: ActionResultStatus;
};
