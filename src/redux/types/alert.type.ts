export type AlertState = {
    isShow: boolean;
    title: string;
    description: string;
    onAccept: () => void;
    onCancel: () => void;
    // isCancel?: boolean;
    // isAccept?: boolean;
    // isLoader?: boolean;
};
