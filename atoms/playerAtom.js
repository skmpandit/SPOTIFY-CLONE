import { atom } from "recoil";


export const playState = atom({
    key: "palyState",
    default: false,
});

export const playingTrackState = atom({
    key: "playingTrackState",
    default: "",
});